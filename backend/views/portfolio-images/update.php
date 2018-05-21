<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\PortfolioImage */

$this->title = 'Update Portfolio Image: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Portfolio Images', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="portfolio-image-update">

    <h3><?= Html::encode($this->title) ?></h3>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
