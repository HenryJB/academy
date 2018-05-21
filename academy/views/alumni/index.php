<?php
/* @var $this yii\web\View */

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use common\models\AfricanState;
use common\models\Course;

?>


<!-- =====================================
==== Start Courses -->
<section class="team section-padding bg-w" data-scroll-index="4">
    <div class="container-fluid">
        <div class="row" id="course_row_1">

            <div class="col-md-8">

                <div class="col-md-12">
                  <div class="section-head">
                      <h4>Alumini  </h4>
                      <p> What do you want to learn today? What's your dream job</p>
                      <p class="font-weight-bold text-black">I want to learn...</p>

                      <?php if(count($alumni)>0):?>



                            <?php foreach($alumni as $al): ?>
                                <div class="col-xs-12 col-sm-6 col-lg-4" id="course_card">
                                  <div class="titem wow fadeInUp">
                                    <div class="author-img">
                                      <?=Html::img('@web/uploads/alumni/thumbs/'.$al->photo, ['alt'=>''])?>
                                    </div>
                                    <div class="info">
                                        <h6><?= $al->first_name .' '. $al->last_name ?></h6>
                                        <span>Delyorker  <?= $al->year ?></span>

                                        <div class="course-description ">

                                        </div>
                                    </div>
                              </div>
                            </div>
                          <?php endforeach; ?>



                    <?php endif; ?>

                  </div>
                </div>
            </div>
            <div class=" col-md-4">
              <div class="col-md-12">
                <div class="">

                  <a href="<?= Yii::$app->request->baseUrl?>/alumni/create" class="btn btn-lg btn-primary">Become an Alumni</a>
                </div>
                <div class="card-title">
                  <h4>Become An Alumni</h4>

                </div>
              </div>

            </div>
            <div class="clear-fix"></div>

        </div>

    </div>
</section>
<!-- End Courses ====
======================================= -->
