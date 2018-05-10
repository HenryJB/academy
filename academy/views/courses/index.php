<?php
/* @var $this yii\web\View */
use yii\helpers\Html;

?>


<!-- =====================================
==== Start Courses -->
<section class="team section-padding bg-white" data-scroll-index="4">
    <div class="container">
        <div class="row" id="course_row_1">

            <div class="offset-md-2 col-md-8">
                <div class="section-head">
                    <h4>Imagine Your Future </h4>
                    <p> What do you want to learn today? What's your dream job</p>
                    <p class="font-weight-bold text-black">I want to learn...</p>
                </div>
            </div>
            <div class="clear-fix"></div>


            <?php if(count($courses)>0):?>



                  <?php foreach($courses as $course): ?>
                      <div class="col-xs-12 col-sm-6 col-lg-3" id="course_card">
                        <div class="titem wow fadeInUp">
                          <div class="author-img">
                            <?=Html::img('@web/uploads/courses/'.$course->photo, ['alt'=>''])?>
                          </div>
                          <div class="info">
                              <h6><?= $course->name ?></h6>
                              <span><?= $course->description ?></span>

                              <div class="course-description ">
                                <?=Html::a('View Course','javascript:void(0);',
                                                [
                                                  'class'=>'openPopup btn btn-dark',
                                                  // 'data-toggle'=>'modal',
                                                  'data-href'=>yii::$app->request->baseUrl.'/courses/course-details?id='.$course->id,
                                                  // 'data-target'=>'#courseModal'
                                                  ])?>

                              </div>
                          </div>
                    </div>
                  </div>
                <?php endforeach; ?>



          <?php endif; ?>

            <div class="col-sm-12 text-center my-5">
                <a class="btn btn-danger course__link p-3 text-white">Explore All Courses</a>
            </div>

        </div>

    </div>
</section>
<!-- End Courses ====
======================================= -->
