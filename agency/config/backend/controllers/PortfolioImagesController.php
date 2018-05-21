<?php

namespace backend\controllers;

use Yii;
use common\models\PortfolioImage;
use yii\data\ActiveDataProvider;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * PortfolioImagesController implements the CRUD actions for PortfolioImage model.
 */
class PortfolioImagesController extends Controller
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
     * Lists all PortfolioImage models.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => PortfolioImage::find(),
            'pagination' => ['pageSize' => 5],
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single PortfolioImage model.
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
     * Creates a new PortfolioImage model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     *
     * @return mixed
     */
    public function actionCreate()
    {
        ini_set('memory_limit', '32M');
        $model = new PortfolioImage();

        if ($model->load(Yii::$app->request->post())) {
            $photos = UploadedFile::getInstances($model, 'photos');
            $portfolio_id = $model->portfolio_id;
            foreach ($photos as  $file) {
                //$model = new PortfolioImage();
                $model->portfolio_id = $portfolio_id;
                $model->photos = $file;
                $model->date = date('Y-m-d');

                $file->saveAs(Url::to('@frontend/web/uploads/portfolios-images/').$file->baseName.'.'.$file->extension);
                ImageBox::thumbnail(Url::to('@frontend/web/uploads/portfolios-images/').$file->baseName.'.'.$file->extension, 293, 293)
                    ->resize(new Box(293, 293))
                    ->save(Url::to('@frontend/web/uploads/portfolios-images/thumbs/').$file->baseName.'.'.$file->extension,
                              ['quality' => 80]);

                $model->save(false);
                $model = new PortfolioImage();
            }

            return $this->redirect(['index']);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing PortfolioImage model.
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

        $image = Url::to('@agency/web/uploads/portfolios-images/').$model->photos;
        $thumbnail = Url::to('@agency/web/uploads/portfolios-images/thumbs').$model->photos;

        if ($model->load(Yii::$app->request->post())) {
            $photos = UploadedFile::getInstances($model, 'photos');

            foreach ($photos as $photo) {
                $model->photos = $photo;

                $photo->saveAs(Url::to('@agency/web/uploads/portfolios-images/').$photo->baseName.'.'.$photo->extension);

                ImageBox::thumbnail(Url::to('@agency/web/uploads/portfolios-images/').$photo->baseName.'.'.$photo->extension, 293, 293)
                    ->resize(new Box(293, 293))
                    ->save(
                        Url::to('@agency/web/uploads/portfolios-images/thumbs/').$photo->baseName.'.'.$photo->extension,
                        ['quality' => 80]
                    );

                if ($model->save(false)) {
                    $this->deleteImages($image, $thumbnail);

                    return $this->redirect(['view', 'id' => $model->id]);
                }
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    protected function deleteImages($image, $thumbnail)
    {
        @unlink($image);
        @unlink($thumbnail);
    }

    /**
     * Deletes an existing PortfolioImage model.
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

    /**
     * Finds the PortfolioImage model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     *
     * @param int $id
     *
     * @return PortfolioImage the loaded model
     *
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = PortfolioImage::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
