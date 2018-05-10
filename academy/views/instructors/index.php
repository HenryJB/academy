<?php
    use yii\helpers\Html;
    use academy\assets\InstructorAsset;

    InstructorAsset::register($this);
?>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">

                    <div class="card">
                        <div class="row">
                            <aside class="col-sm-5 border-right">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <div>
                                            <a href="#">
                                                <img src="img/blog/1.jpg">
                                            </a>
                                        </div>
                                    </div>

                                </article>
                                <!-- gallery-wrap .end// -->
                            </aside>
                            <aside class="col-sm-7">
                                <article class="card-body p-5">
                                    <h3 class="title mb-3">Cinematography</h3>

                                    <p class="price-detail-wrap">
                                        <span class="price h3 text-warning">
                                            <span class="currency">US $</span>
                                            <span class="num">1299</span>
                                        </span>
                                        <span>/per kg</span>
                                    </p>
                                    <!-- price-detail-wrap .// -->
                                    <dl class="item-property">
                                        <dt>Description</dt>
                                        <dd>
                                            <p>Here goes description consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco </p>
                                        </dd>
                                    </dl>

                                    <hr>

                                    <a href="#" class="btn btn-lg btn-danger text-uppercase"> APPLY NOW </a>
                                </article>
                                <!-- card-body.// -->
                            </aside>
                            <!-- col.// -->
                        </div>
                        <!-- row.// -->
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

<!-- Instructors -->
<section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1 text-dark">Instructors</h5>
        <div class="row">
            <!-- Team member -->
            <?php  if(count($instructors)>0): ?>
                <?php  foreach ($instructors as $instructor): ?>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p>
                                      <?= Html::img('@web/uploads/instructors/thumbs/'. $instructor->photo,
                                       ['class'=>'img-fluid']
                                       )?>

                                    </p>
                                    <h4 class="card-title text-black"><?= $instructor->first_name. ' '. $instructor->last_name?></h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>

                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title text-dark"><?= $instructor->first_name. ' '. $instructor->last_name?></h4>
                                    <p class="card-text"><?= $instructor->resume?></p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <?php endforeach; ?>
        <?php endif; ?>
        </div>
    </div>
</section>
<!-- Instructors -->
