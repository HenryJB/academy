<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Student */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Students', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>




<?= Html::cssFIle('@web/css/extra.css'); ?>
<section style="background:#efefe9;">
        <div class="container">
            <div class="row">
                <div class="board">

                    <div class="board-inner">
                    <ul class="nav nav-tabs" id="myTab">
                    <div class="liner"></div>
                     <li class="active">
                     <a href="#home" data-toggle="tab" title="welcome">
                      <span class="round-tabs one">
                              <i class="glyphicon glyphicon-home"></i>
                      </span>
                  </a></li>


                     </ul>
                   </div>

                     <div class="tab-content">
                      <div class="tab-pane fade in active" id="home">

                          <h3 class="head text-center">Your Registration was successful. <br /> Please Proceed to pay your registation fees <br />
                            by clicking on the button below.</h3>
                          <p class="narrow text-center">
                                Note: You will redirected to a secure payment platform where your card details will be required.
                          </p>

                          <p class="text-center">
                            <button class="btn btn-success btn-outline-rounded">PAY NOW</button>

                          </p>
                      </div>


                      <div class="clearfix"></div>
                      </div>

                      </div>
                      </div>
                      </div>
</section>
