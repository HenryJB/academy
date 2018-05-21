<?php

namespace backend\controllers;

use common\models\StudentProject;
use common\models\StudentSearch;
use Yii;
use common\models\Student;
use yii\data\ActiveDataProvider;
use yii\helpers\Url;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * StudentController implements the CRUD actions for Student model.
 */
class StudentController extends Controller
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

    /**
     * Lists all Student models.
     * @return mixed
     */
    public function accessRules() {
        return array(
            array('allow', // only registered users can view and update
                'actions' => array('hpicheck' ),
                'users' => array('@'),
            ),
        );
    }


    public function actionIndex()
    {
        $searchModel = new StudentSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);



        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Student model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {

        $project = StudentProject::find()->where(['student_id'=> $id])->all();
        return $this->render('view', [
            'model' => $this->findModel($id),
            'projects' => $project,
        ]);
    }

    /**
     * Creates a new Student model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Student();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionPicture()
    {
        $model = new Student();

        $requestval = \Yii::$app->request->post();
        $con = 'id = '.$requestval['id'];

        $student = Student::find()->where(['id'=> $requestval['id']])->one();


        if ( file_exists(Url::to('@web/uploads/student/'.$student->photo)) == true ) {

            if(unlink(Url::to('@web/uploads/student/'.$student->photo)) && unlink(Url::to('@web/uploads/student/thumbs/'.$student->photo)))
            { $filename = $this->save_base64_image($requestval['img'],$student->first_name,'/web/uploads/student/');
                $db = Yii::$app->db;
                $transaction = $db->beginTransaction();
                try {
                    $db->createCommand()->update('students', ['photo' => $filename],$con)->execute();
                    // ... executing other SQL statements ...

                    $transaction->commit();
                    return 'Upload successful';
                } catch(\Exception $e) {
                    return 'failed';
                }
            }
        }else{
            $filename = $this->save_base64_image($requestval['img'],$student->first_name,'/web/uploads/student/');
            $db = Yii::$app->db;
            $transaction = $db->beginTransaction();
            try {
                $db->createCommand()->update('students', ['photo' => $filename],$con)->execute();
                // ... executing other SQL statements ...

                $transaction->commit();
                return 'Upload successful';
            } catch(\Exception $e) {
                return 'failed';
            }
        }
        return 'failed';

    }

    /**
     * Updates an existing Student model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
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

    public function actionApproval()
    {
        $requestval = \Yii::$app->request->post();
        $id = $requestval['id'];
        $val1 = $requestval['val1'];

        $con = 'id = '.$id;

        $db = Yii::$app->db;
        $transaction = $db->beginTransaction();
        try {
            $db->createCommand()->update('students', ['approval_status' => $val1],$con)->execute();
            // ... executing other SQL statements ...

            $transaction->commit();

            return $val1 == 'Approved' ? 'Not Approved' : 'Approved';
        } catch(\Exception $e) {
            return 'failed';
        }

    }



    /**
     * Deletes an existing Student model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Student model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Student the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Student::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    function save_base64_image($base64_image_string, $output_file_without_extentnion, $path_with_end_slash="" ) {
        //usage:  if( substr( $img_src, 0, 5 ) === "data:" ) {  $filename=save_base64_image($base64_image_string, $output_file_without_extentnion, getcwd() . "/application/assets/pins/$user_id/"); }
        //
        //data is like:    data:image/png;base64,asdfasdfasdf
        $output_file_with_extentnion='';
        $splited = explode(',', substr( $base64_image_string , 5 ) , 2);
        $mime=$splited[0];
        $data=$splited[1];

        $mime_split_without_base64=explode(';', $mime,2);
        $mime_split=explode('/', $mime_split_without_base64[0],2);
        if(count($mime_split)==2)
        {
            $extension=$mime_split[1];
            if($extension=='jpeg')$extension='jpg';
            //if($extension=='javascript')$extension='js';
            //if($extension=='text')$extension='txt';
            $output_file_with_extentnion.=$output_file_without_extentnion.'.'.$extension;
        }
        file_put_contents(Url::to('@backend/web/uploads/student/'.$output_file_with_extentnion), base64_decode($data) );
        return $output_file_with_extentnion;
    }


}
