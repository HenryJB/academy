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

    <h3><?= Html::encode($this->title) ?></h3>

    <div class="alert alert-success">
        Your Registration was successful. Please check your email address to activate your account.
    </div>
    <div class="alert alert-info">
      To to pay your registation fee, please click here.
    </div>

    

    <!--  DetailView::widget([
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
            'first_choice',
            'second_choice',
            'reason:ntext',
            'information_source',
            'sponsor_aid',
            'terms_condition',
            'date_registered',
        ],
    ]) ?> -->

</div>
