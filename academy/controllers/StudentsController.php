<?php

namespace academy\controllers;

use Yii;
use common\models\Student;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use common\models\AfricanState;
use common\models\CoursesCategory;
use yii\web\UploadedFile;

/**
 * StudentController implements the CRUD actions for Student model.
 */
class StudentsController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    public function beforeAction($action)
    {
        if (in_array($action->id, ['related-states', 'login'])) {
            $this->enableCsrfValidation = false;
        }

        return parent::beforeAction($action);
    }

    // /**
    //  * Lists all Student models.
    //  * @return mixed
    //  */
    // public function actionIndex()
    // {
    //     $dataProvider = new ActiveDataProvider([
    //         'query' => Student::find(),
    //     ]);
    //
    //     return $this->render('index', [
    //         'dataProvider' => $dataProvider,
    //     ]);
    // }

    /**
     * Displays a single Student model.
     *
     * @param int $id
     *
     * @return mixed
     *
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Student model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     *
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Student();
        $model->year = date('Y');
        // $model->payment_status = date('Y');
        // $model->approval_status = date('Y');
        $model->date_registered = date('Y-m-d');

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            //send mail here

            //$this->sendMail($model->email_address);
            // print_r($model->getErrors());

            $message = Yii::$app->mailer->compose('@common/mail/layouts/registration.php');
            $message->setTo($model->email_address);
            $message->setFrom(Yii::$app->params['supportEmail']);
            $message->setSubject('Registration Successful');
            $message->send();

            Yii::$app->session->setFlash('Email Sent');

            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
             'model' => $model,
         ]);
    }

    public function actionRelatedStates($id)
    {
        $states = AfricanState::find()->where(['country' => $id])->all();
        if (count($states) > 0) {
            foreach ($states as $state) {
                echo '<option value="'.$state->state_id.'">'.$state->state_name.'</option>';
            }
        } else {
            echo '<option> </option>';
        }
    }

    public function actionRelatedCourses($id)
    {
        $coursesCategory = CoursesCategory::find()->where(['id' => $id])->all();
        if (count($coursesCategory) > 0) {
            foreach ($coursesCategory as $category) {
                echo '<option value="'.$category->id.'">'.$category->name.'</option>';
            }
        } else {
            echo '<option> </option>';
        }
    }

    /**
     * Updates an existing Student model.
     * If update is successful, the browser will be redirected to the 'view' page.
     *
     * @param int $id
     *
     * @return mixed
     *
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Student model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     *
     * @param int $id
     *
     * @return mixed
     *
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    public function actionLogin()
    {
        //$model = new Student();
        if (Yii::$app->request->post()) {
            $email = Yii::$app->request->post('email_address');
            $password = Yii::$app->request->post('password');

            $student = Student::find()->where(['email_address' => $email])->one();

            if (count($student) > 0) {
                return $this->redirect(['profile', 'id' => $student->id]);
            }
        }

        return $this->renderPartial('login');
    }

    /**
     * Finds the Student model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     *
     * @param int $id
     *
     * @return Student the loaded model
     *
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Student::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

<<<<<<< HEAD
=======



>>>>>>> ed9a89b739e7f5c7b232e27e91786c3fff453600
    public function actionRegister()
    {
        return $this->render('register');
    }

    public function actionProfile($id = '')
    {
        return $this->renderPartial('profile', ['student' => $this->findModel($id)]);
    }
}
