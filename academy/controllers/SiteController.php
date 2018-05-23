<?php

namespace academy\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use main\models\PasswordResetRequestForm;
use main\models\ResetPasswordForm;
use main\models\SignupForm;
use main\models\ContactForm;
use common\models\About;
use common\models\Course;
use common\models\TrainingGallery;
use common\models\Student;
use common\models\Alumni;
use common\models\Dcauser;

/**
 * Site controller.
 */
class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function beforeAction($action)
    {
        if (in_array($action->id, [ 'login'])) {
            $this->enableCsrfValidation = false;
        }

        return parent::beforeAction($action);
    }


    public function actionIndex()
    {
        $this->layout = '@academy/views/layouts/landing';

        return $this->render('index');
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionHome()
    {
        $galleries = TrainingGallery::find()->all();
        $coursesModel = Course::find()->all();
        $alumnis = Alumni::find()->all();

        return $this->render('home', [
            'courses' => $coursesModel,
            'galleries' => $galleries,
            'alumnis'  => $alumnis
        ]);
    }




    public function actionLogin()
    {
        $model = new LoginForm();

        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            $email = $model->username;
            $password = $model->password;

            $user = Dcauser::find()->where(['username'=> $email, 'password'=>$password])->one();

            if(count($user)>0){

              if($user->usertype==1){

                $current_user = Student::find()->where(['email_address' => $user->username])->one();

              }elseif ($user->usertype==2) {
                  $current_user = Alumni::find()->where(['email' => $user->username])->one();
              }

              $user_session = Yii::$app->session;
              $user_session->set('id', $current_user->id);

              if($user->usertype==1 && $current_user->payment_status==='not paid'){

                  return $this->redirect(['payments/index']);

              }elseif ($user->usertype==1 && $current_user->payment_status==='paid' && empty($current_user->reason)) {

                return $this->redirect(['students/update-profile']);

              }elseif ($user->usertype==1 && $current_user->payment_status==='paid' && !empty($current_user->reason)) {
                return $this->redirect(['students/profile']);
              
              }elseif ($user->usertype==2 &&  empty($current_user->facebook)) {

                  return $this->redirect(['alumni/update-profile']);
              }else{

                     return $this->renderPartial('login', ['model'=>$model]);
              }


            }else {
                return $this->renderPartial('login', ['model'=>$model]);
            }


        }

        return $this->renderPartial('login', ['model'=>$model]);
    }


    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } else {
                Yii::$app->session->setFlash('error', 'There was an error sending your message.');
            }

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */
    public function actionPage()
    {
        return $this->render('utility-view');
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post())) {
            if ($user = $model->signup()) {
                if (Yii::$app->getUser()->login($user)) {
                    return $this->goHome();
                }
            }
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');

                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Resets password.
     *
     * @param string $token
     *
     * @return mixed
     *
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidParamException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }
}
