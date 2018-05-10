<?php

namespace backend\controllers;

use Yii;
use common\models\CeoPhoto;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * CeoPhotosController implements the CRUD actions for CeoPhoto model.
 */
class CeoPhotosController extends Controller
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
     * Lists all CeoPhoto models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => CeoPhoto::find(),
            'pagination' => ['pageSize'=> 6],
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single CeoPhoto model.
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
     * Creates a new CeoPhoto model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new CeoPhoto();

        if ($model->load(Yii::$app->request->post())) {
              $photos = UploadedFile::getInstances($model, 'photo');

              foreach ($photos as  $file) {

                  $model->photo= $file;

                  $file->saveAs(Url::to('@agency/web/uploads/ceo-images/').   $file->baseName . '.' . $file->extension);
                  ImageBox::thumbnail(Url::to('@agency/web/uploads/ceo-images/'). $file->baseName . '.' . $file->extension, 263, 263)
                    ->resize(new Box(263,263))
                    ->save(Url::to('@agency/web/uploads/ceo-images/thumbs/') . $file->baseName  . '.' . $file->extension,
                              ['quality' => 80]);

                  $model->save(false);
                  $model = new CeoPhoto();

                }

                return $this->redirect(['index']);


        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing CeoPhoto model.
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
     * Deletes an existing CeoPhoto model.
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
     * Finds the CeoPhoto model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return CeoPhoto the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = CeoPhoto::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
