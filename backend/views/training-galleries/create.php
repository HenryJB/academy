<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\TrainingGallery */

$this->title = 'Create Training Gallery';
$this->params['breadcrumbs'][] = ['label' => 'Training Galleries', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="training-gallery-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
