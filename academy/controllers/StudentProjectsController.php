<?php

namespace academy\controllers;

use Yii;
use common\models\StudentProject;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;
use yii\filters\VerbFilter;
use yii\helpers\Url;

/**
 * StudentProjectsController implements the CRUD actions for StudentProject model.
 */
class StudentProjectsController extends Controller
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
     * Lists all StudentProject models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => StudentProject::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single StudentProject model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new StudentProject model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new StudentProject();

        if ($model->load(Yii::$app->request->post())) {
              $attachments = UploadedFile::getInstances($model, 'attachment');

              foreach ($attachments as  $file) {

                  $model->attachment= $file;
                  $extensions = array('png','jpg', 'jpeg');

                  if(in_array($file->extension, $extensions)){

                      $file->saveAs(Url::to('@academy/web/uploads/student-projects/').   $file->baseName . '.' . $file->extension);
                      ImageBox::thumbnail(Url::to('@academy/web/uploads/student-projects/'). $file->baseName . '.' . $file->extension, 263, 263)
                        ->resize(new Box(263,263))
                        ->save(Url::to('@academy/web/uploads/student-projects/thumbs/') . $file->baseName  . '.' . $file->extension,
                                ['quality' => 80]);
                  }else {
                      $file->saveAs(Url::to('@academy/web/uploads/student-projects/').   $file->baseName . '.' . $file->extension);

                  }


                  $model->save(false);
                  $model = new StudentProject();

                }

                return $this->redirect(['index']);


        }


        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing StudentProject model.
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

    /**
     * Deletes an existing StudentProject model.
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
     * Finds the StudentProject model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return StudentProject the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = StudentProject::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
