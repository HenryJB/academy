<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Students';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="student-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Student', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'first_name',
            'last_name',
            'gender',
            'email_address:email',
            //'contact_address:ntext',
            //'year',
            //'payment_status',
            //'approval_status',
            //'country_id',
            //'state_id',
            //'date_of_birth',
            //'date_registered',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
