<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Portfolios';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="portfolio-index">

    <h3><?= Html::encode($this->title) ?></h3>

    <p>
        <?= Html::a('Create Portfolio', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            'title',
            'subtitle',
            'description:ntext',
            ['attribute'=>'client_id',
            'value'=>function ($model)
            {
              return $model->client->name ;
            }],

            //'year',
            //'websiteurl',
            //'date_executed',
            //'date',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
