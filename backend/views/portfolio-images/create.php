<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\PortfolioImage */

$this->title = 'Create Portfolio Image';
$this->params['breadcrumbs'][] = ['label' => 'Portfolio Images', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="portfolio-image-create">

    <h3><?= Html::encode($this->title) ?></h3>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
