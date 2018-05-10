<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Student */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Students', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="student-view">

    <h3>Please very the information you have entered before proceeding</h3>
      <p>
        Thanks, your registration was successful
      </p>


    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'first_name',
            'last_name',
            'gender',
            'email_address:email',
            'contact_address:ntext',
            'year',
            'payment_status',
            'approval_status',
            'country',
            'state_id',
            'date_of_birth',
            'date_registered',
        ],
    ]) ?>
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>

    </p>
</div>
