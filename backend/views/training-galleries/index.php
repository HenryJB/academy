<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Training Galleries';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="training-gallery-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Training Gallery', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'photo',
            'description:ntext',
            'year',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
