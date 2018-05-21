<?php

namespace academy\controllers;

use yii;
use common\models\EmailTemplate;
use common\models\Student;
use common\models\Email;

class MessagingController extends \yii\web\Controller
{
    public function actionRegistration($email)
    {
        $model = EmailTemplate::findOne(1);

        $sent_mail = new Email();

        $student = Student::Find()->where(['email_address' => $email])->one();

        $session = Yii::$app->session;

        $message = Yii::$app->mailer->compose(
            '@common/mail/layouts/registration.php',
            [
                'content' => $model->body,
                'attachment' => $model->attachment,
                'title' => $model->type,
                'name' => $student->first_name,
            ]
        );

        $message->setTo($email);
        $message->setFrom(Yii::$app->params['supportEmail']);
        $message->setSubject($model->subject);

        if (!empty($message->attachment)) {
            $path = Url::to('@academy/web/uploads/attachments/'.$message->attachment);
            $message->attach($path);
        }
        if ($message->send()) {
            $sent_mail->sender_email = Yii::$app->params['supportEmail'];
            $sent_mail->receiver_email = $email;
            $sent_mail->email_template_id = 2;
            $sent_mail->date = date('Y-m-d');

            if ($sent_mail->save()) {
                Yii::$app->session->setFlash('Email Sent');
            }
        }

        return $this->redirect('students/profile');
    }
}
