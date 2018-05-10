<?php

/* @var $this yii\web\View */
use yii\helpers\Html;
$this->title = 'Del-York Academy';
?>

<!-- =====================================
==== Start Header -->
<header class="header valign" data-scroll-index="0" data-overlay-dark="7">

    <video class="bg-vid" poster="../../web/img/bg1.jpg" autoplay="" loop="" muted="">
        <source src="../../web/video/video.mp4" type="video/mp4">
    </video>

    <div class="container">
        <div class="row">
            <div class="vertical-center full-width text-center caption">
                <h5>Del-York <span>Creative</span> Academy</h5>
                <h1 class="bold">Change the Narratives</h1>
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10">
                        <p>Develop capacity and make life better.</p>
                    </div>
                </div>
                <!-- <a href="#0" class="btn btn-danger">Get Started</a> -->

            </div>
        </div>
    </div>

    <div class="arrow">
        <a href="#" data-scroll-nav="1">
            <i class="fas fa-chevron-down"></i>
        </a>
    </div>
</header>
<!-- End Header ====
======================================= -->


<!-- =====================================
==== Start hero -->
<section class="hero" data-scroll-index="1">
    <div class="intro bg-gray text-center">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 content wow fadeInUp">
                    <a class="logo-img" href="#">
                        <img src="img/brand.png" alt="logo">
                    </a>
                    <h4 class="extra-title">Who We Are</h4>
                    <p>
                      Del-York Creative Academy is the most prestigious film training program in Africa.
                      We partner with award winning instructors from Hollywood and bring them to Nigeria to lead an intensive month-long
                      workshop, where we provide young aspiring African filmmakers with a comprehensive training for
                      working in the film industry...

                    </p>
                    <a class="btn btn-danger course__link p-3 text-white">Read more</a>
                </div>
            </div>
        </div>
    </div>


</section>
<!-- End hero ====
======================================= -->


<!-- =====================================
==== Start Courses -->
<section class="team section-padding bg-white" data-scroll-index="4">
    <div class="container">
        <div class="row">
            <div class="offset-md-2 col-md-8">
                <div class="section-head">
                    <h4>Our Courses </h4>
                    <!--<p>Lorem Ipsum is simply duxmmy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>-->
                </div>
            </div>
            <div class="clear-fix"></div>

              <div class="owl-carousel owl-theme full-width text-center">
                      <?php if(count($courses)>0):?>

                          <?php foreach($courses as $course): ?>
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

                        <?php endforeach; ?>

                  <?php endif; ?>
            </div>

                <div class="col-sm-12 text-center my-5">
                  <?=Html::a('Browse All Courses',Yii::$app->request->baseUrl.'/courses/index',
                                  [ 'class'=>'btn btn-danger course__link p-3 text-white',   ])?>

                </div>


            </div>
        </div>
</section>
<!-- End Courses ====
======================================= -->


<!-- <section id="collaborators">
    <div class="container-fluid">
        <div class="row">

            <div class="col-lg-10 offset-lg-1">
                <ul class="list-inline text-center">
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image1.png"></li>
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image2.png"></li>
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image3.png"></li>
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image4.png"></li>
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image5.png"></li>
                    <li class="list-inline-item img-fluid"><img src="https://www.solodev.com/assets/carousel/image6.png"></li>
                </ul>
            </div>

        </div>
    </div>
</section> -->


<!-- =====================================
==== Start about -->
<section class="about" data-scroll-index="1">
    <div class="bg-gray position-re">
        <div class="container">
            <div class="row">
                <div class="half-imgl bg-img" data-background="img/pic_1.jpg"></div>
                <div class="offset-lg-6 col-lg-6">
                    <div class="content fbox wow fadeIn">
                        <h6 class="sub-title">Benefits for Participation</h6>
                        <h4 class="extra-title"> Project 500</h4>
                        <p>
                          Apply now, upload your content and stand a chance to become one of the  500 candidates to
                        </p>

                        <div class="skills">
                            <div class="skill-item">
                                <h6>Get  full Sponsorship</h6>
                                <div class="skills-progress">
                                    <span data-value='100%'></span>
                                </div>
                            </div>
                            <div class="skill-item">
                                <h6>Become A Del-York Crusader using  creative tools to tackle the 10-point agenda SDG</h6>
                                <div class="skills-progress">
                                    <span data-value='100%'></span>
                                </div>
                            </div>
                            <div class="skill-item">
                                <h6>Learn from the Masters of the Art from Hollywood and  around the world.</h6>
                                <div class="skills-progress">
                                    <span data-value='100%'></span>
                                </div>
                            </div>
                            <div class="skill-item">
                                <h6>Become part of a global network of creative minds </h6>
                                <div class="skills-progress">
                                    <span data-value='100%'></span>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center my-5">
                                <a class="btn btn-danger course__link p-3 text-white">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
<!-- End about ====
======================================= -->

<section class="gallery_area" id="portfolio">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="gallery_menu">
                    <div class="text-center portfolio-menu">
                       <h4>Previous Trainings</h4>
                    </div>
                </div>

                <div class="gallery_full_width_images_area row no-gutters clearfix" style="position: relative; height: 1154.81px;">

                    <!-- Single gallery Item -->
                    <?php  if(count($galleries)>0): ?>

                        <?php  foreach( $galleries as $gallery): ?>
                          <div class="gra col-12 col-sm-6 col-md-4 col-lg-3 single_gallery_item" style="position: absolute; left: 0%; top: 0px;">
                              <div class="single_gallery_content">
                                <?= Html::img('@web/uploads/training-gallery/thumbs/'. $gallery->photo,
                                 ['class'=>'']
                                 )?>

                                  <!-- Hover Effects -->
                                  <div class="hover_overlay">
                                      <div class="gallery_info">
                                          <div class="zoom-details-btn">
                                              <a class="gallery_img animated fadeInDown" href="@web/uploads/training-gallery/thumbs/"<?php $gallery->photo?>>
                                                  <i class="ti-zoom-in"></i>
                                              </a>
                                              <a href="single-portfolio-1.html">
                                                  <i class="ti-link"></i>
                                              </a>
                                          </div>
                                          <h5><?=$gallery->description?></h5>
                                          <!-- <p>Catagory Name</p> -->
                                      </div>
                                  </div>
                              </div>
                          </div>
                        <?php endforeach; ?>
                      <?php endif; ?>



                </div>
            </div>
        </div>


    </div>
</section>

            </div>


            </div>
        </div>
</section>
<!-- End Courses ====
======================================= -->
