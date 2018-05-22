<?php

use yii\helpers\Html;
use yii\grid\GridView;
use common\models\AfricanState;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Students';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="student-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php //  echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Student', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'first_name',
            'last_name',
            'gender',
            'email_address:email',
            //'contact_address:ntext',
            //'year',
            //'payment_status',
            //'approval_status',
            'country',

            ['attribute'=>'state_id',
            'value'=>function ($model)
            {
              $state = AfricanState::find()->where(['state_id'=>$model->state_id])->one();
              return $state->state_name;
            }],
            //'date_of_birth',
            //'date_registered',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
