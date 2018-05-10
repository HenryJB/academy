<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Student */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Students', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>





<section class="team section-padding bg-white" data-scroll-index="4">
    <div class="container">
        <div class="row" id="">

            <div class="offset-md-2 col-md-8">
                <div class="section-head">
                    <h4>Imagine Your Future </h4>
                    <p> What do you want to learn today? What's your dream job</p>
                    <p class="font-weight-bold text-black">I want to learn...</p>
                </div>
            </div>
            <div class="clear-fix"></div>

            <div class="student-view">

                <h3><?= Html::encode($this->title) ?></h3>

                <div class="alert alert-success">
                    Your Registration was successful. Please check your email address to activate your account.
                </div>
                <div class="alert alert-info">
                  To to pay your registation fee, please click here.
                </div>




              </div>

        </div>

    </div>
</section>
