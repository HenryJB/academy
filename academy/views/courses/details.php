<?php
/* @var $this yii\web\View */
use yii\helpers\Html;

?>
<div class="container">

    <div class="card" style="border:none!important">
        <div class="row">

          <?php  if(count($course)>0):?>
            <aside class="col-sm-5 ">

                <article class="gallery-wrap">
                    <div class="img-big-wrap">
                        <div>
                            <a href="#">
                              <?=Html::img('@web/uploads/courses/'.$course->photo, ['alt'=>''])?>

                            </a>
                        </div>
                    </div>

                </article>
                <!-- gallery-wrap .end// -->
            </aside>
            <aside class="col-sm-7">
                <article class="card-body p-5">

                    <h3 class="title mb-3"><?= $course->name?></h3>
                    <dl class="item-property">
                        <dt>Description</dt>
                        <dd>
                            <p> <?= $course->description;?></p>
                        </dd>
                    </dl>

                    <p class="price-detail-wrap">
                        <span class="price h3 text-warning">
                            <span class="currency">US $</span>
                            <span class="num"><?= $course->fee?></span>
                        </span>

                    </p>

                    <hr>
                    <?= Html::a('APPLY NOW', yii::$app->request->baseUrl.'/students/create', ['class'=>'btn btn-lg btn-danger text-uppercase'])?>

                </article>
                <!-- card-body.// -->
            </aside>
            <!-- col.// -->
              <?php endif ?>
        </div>
        <!-- row.// -->
    </div>

</div>
