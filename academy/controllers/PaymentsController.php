<?php

namespace academy\controllers;
use Yii;
class PaymentsController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $session = Yii::$app->session;
        $session->get('id');
        return $this->render('index');
    }


    public function payment_process() {
        // data collected from the response
        $apprAmt = Yii::$app->request->post('apprAmt');
        $payRef = Yii::$app->request->post('payRef');
        $submittedref = Yii::$app->request->post('txnref');
        $refref = Yii::$app->request->post('refRef');
        $cardNum = Yii::$app->request->post('cardNum');

        // session data retrieved
        $subpdtid = $this->session->userdata('product_id');
        $submittedamt = $this->session->userdata('amount');
        $customer_phone = $this->session->userdata('customer_phone');

        $status = 'failed';
        //  new hash key
        $nhash = 'E187B1191265B18338B5DEBAF9F38FEC37B170FF582D4666DAB1F098304D5EE7F3BE15540461FE92F1D40332FDBBA34579034EE2AC78B1A1B8D9A321974025C4';
        $hashv = $subpdtid . $submittedref . $nhash;
        $thash = hash('sha512', $hashv);

        $headers = array(
            "GET /HTTP/1.1",
            "User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1",
            "Accept-Language: en-us,en;q=0.5",
            "Keep-Alive: 300",
            "Connection: keep-alive",
            "Hash:" . $thash); // computed hash now added to header of my request
        // curl configuration information
        $curl_handle = curl_init();
        curl_setopt($curl_handle, CURLOPT_URL, 'https://stageserv.interswitchng.com/test_paydirect/api/v1/gettransaction.json?productid=' . $subpdtid . '&transactionreference=' . $submittedref . '&amount=' . $submittedamt);
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handle, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl_handle, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl_handle, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($curl_handle, CURLOPT_POST, false);

        $data = curl_exec($curl_handle);
        if (curl_errno($curl_handle)) {
            print "Error: " . curl_error($curl_handle);
        } else {
            // show ressult in json
            $page['response_data'] = json_decode($data, TRUE);
            curl_close($curl_handle);
            $code_response = $page['response_data']['ResponseCode'];

            if ($code_response === "00") {

                $msg_to_d = "A student has placed an order with this order code:" . $this->session->userdata('order_code'); //$orders;
                $order_msg_to_customer = 'Thank you. Your payment has been approved and order being processed. order code:' . $this->session->userdata('order_code');

                //sms functions

                $user_orders = $this->session->userdata('user_orders');

                $user_orders = array(
                    'user_id' => $user_orders['user_id'],
                    'order_code' => $user_orders['order_code'],
                    'order_content' => $user_orders['order_content'],
                    'order_total' => $user_orders['order_total'],
                    'order_status' => 1,
                    'restaurant_id' => $user_orders['restaurant_id'],
                    'recipient_lastname' => $user_orders['recipient_lastname'],
                    'recipient_firstname' => $user_orders['recipient_firstname'],
                    'recipient_phoneno' => $user_orders['recipient_phoneno'],
                    'recipient_email' => $user_orders['recipient_email'],
                    'payment_method' => $user_orders['payment_method'],
                    'payment_status' => 'paid',
                    'created' => $user_orders['created']
                );

                $this->session->set_userdata('user_orders', $user_orders);

                $this->Cart->updateuserorder($user_orders);

                $transaction_info = array(
                    'transaction_response' => "Your transaction was approved successfully by Interswitch",
                    'transaction_reason' => "",
                    'payment_reference' => $page['response_data']['PaymentReference']
                );
                $this->session->set_userdata('transaction_info', $transaction_info);

                $status = "Success";
                $array = array(
                    'reference' => $submittedref,
                    'amount' => $submittedamt,
                    'response' => $page['response_data']['ResponseDescription'],
                    'status' => $status,
                    'date' => date('Y-m-d')
                );
                $this->Payment->insertTransactionRecord($array);

                $this->session->set_flashdata('item', array('message' => $page['response_data']['ResponseDescription'], 'class' => 'success'));

                $payment_method = 'online';
                $gofood_user_id = 2;
                $restaurant_user_id = $this->session->userdata('restaurant_user_id');
                $amount_due_restaurant = $this->session->userdata('amount_due_restaurant');
                $amount_due_aggregator = $this->session->userdata('amount_due_aggregator');
                $total_order_amount = $this->session->userdata('amount');
                $total_order_amount = $total_order_amount / 100;


                //($this->Payment->getWalletBalance($user_orders['user_id'])->wallet_balance) ? $this->Payment->getWalletBalance($user_orders['user_id'])->wallet_balance : 0,
                $this->insert_wallet($page['response_data']['PaymentReference'], $user_orders['user_id'], $this->session->userdata('session_tnx_ref'), 0, $total_order_amount, ($this->Payment->getWalletBalance($user_orders['user_id'])->wallet_balance) ? $this->Payment->getWalletBalance($user_orders['user_id'])->wallet_balance : 0, $user_orders['user_id'], 3, $payment_method, 'paid'
                );

                $this->insert_wallet($page['response_data']['PaymentReference'], $restaurant_user_id, $this->session->userdata('session_tnx_ref'), $amount_due_restaurant, 0, ($this->Payment->getWalletBalance($restaurant_user_id)->wallet_balance) ? $this->Payment->getWalletBalance($restaurant_user_id)->wallet_balance : 0, $user_orders['user_id'], 2, $payment_method, 'paid'
                );

                $this->insert_wallet($page['response_data']['PaymentReference'], $gofood_user_id, $this->session->userdata('session_tnx_ref'), $amount_due_aggregator, 0, ($this->Payment->getWalletBalance($gofood_user_id)->wallet_balance) ? $this->Payment->getWalletBalance($gofood_user_id)->wallet_balance : 0, $user_orders['user_id'], 1, $payment_method, 'paid'
                );

                redirect('payments/receipt');
            } else {
                $transaction_info = array(
                    'transaction_response' => "Your transaction was not successfully approved by Interswitch",
                    'transaction_reason' => $page['response_data']['ResponseDescription'],
                    'payment_reference' => $page['response_data']['PaymentReference']
                );
                $this->session->set_userdata('transaction_info', $transaction_info);


                $array = array(
                    'reference' => $submittedref,
                    'amount' => $submittedamt,
                    'response' => $page['response_data']['ResponseDescription'],
                    'status' => $status,
                    'date' => date('Y-m-d')
                );
                $this->Payment->insertTransactionRecord($array);

                $this->session->set_flashdata('item', array('message' => $page['response_data']['ResponseDescription'], 'class' => 'success'));
                redirect('payments/invoice');
            }
        }
    }

}
