<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\TrainingGallery */

$this->title = 'Update Training Gallery: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Training Galleries', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="training-gallery-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
