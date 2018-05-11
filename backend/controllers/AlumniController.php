<?php

namespace backend\controllers;

use Yii;
use common\models\Alumni;
use common\models\AlumniSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * AlumniController implements the CRUD actions for Alumni model.
 */
class AlumniController extends Controller
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
     * Lists all Alumni models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new AlumniSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Alumni model.
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

    public function actionPictureUpdate()
    {
        $model = new Alumni();



        $requestval = \Yii::$app->request->post();
        $con = 'id = '.$requestval['id'];

        $alumni = Alumni::find()->where(['id'=> $requestval['id']]);

        if ( file_exists ( $alumni->photo ) == FALSE ) {
            unset('@backend/web/uploads/alumni/'.$alumni->photo);  //3
            unset('@backend/web/uploads/alumni/thumbs/'.$alumni->photo);  //3

            $model->photo = UploadedFile::getInstance($model, $requestval['image']);

            $photo  = $model->photo->baseName.'.'.$model->photo->extension;


            $db = Yii::$app->db;

            $transaction = $db->beginTransaction();
            try {

                $db->createCommand()->update('alumni', ['photo' => $photo],$con)->execute();
                // ... executing other SQL statements ...
                $transaction->commit();
                $model->update();
                return 'Picture Upload Successful';
            } catch(\Exception $e) {
                return 'failed';
            }
        }

    }


    /**
     * Creates a new Alumni model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Alumni();

        if ($model->load(Yii::$app->request->post())) {

            if ($model->load(Yii::$app->request->post())) {
                $model->photo = UploadedFile::getInstance($model, 'photo');

                if ($model->photo !== null) {
                    if ($model->save() && $model->upload()) {
                        return $this->redirect(['view', 'id' => $model->id]);
                    }
                }
            }


            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Alumni model.
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
     * Deletes an existing Alumni model.
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
     * Finds the Alumni model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Alumni the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Alumni::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
