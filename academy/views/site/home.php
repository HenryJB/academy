<?php

/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\helpers\Url;

$this->title = 'Del-York Academy';
?>

<!-- =====================================
==== Start Header -->
<header class="header valign" data-scroll-index="0" data-overlay-dark="7">

    <video class="bg-vid" poster="<?=Url::to('@web/img/bg1.jpg"'); ?>" autoplay="" loop="" muted="">
        <source src="<?=Url::to('@web/video/video.mp4'); ?>" type="video/mp4">

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
                        <img src="<?=Url::to('@web/img/brand.png'); ?>" alt="logo">
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
                      <?php if (count($courses) > 0):?>

                          <?php foreach ($courses as $course): ?>
                            <div class="titem wow fadeInUp">
                                <div class="author-img">
                                  <?=Html::img('@web/uploads/courses/'.$course->photo, ['alt' => '']); ?>
                                </div>
                                <div class="info">
                                    <h6><?= $course->name; ?></h6>
                                    <span><?= $course->description; ?></span>

                                    <div class="course-description ">
                                      <?=Html::a('View Course','javascript:void(0);',
                                                      [
                                                        'class' => 'openPopup btn btn-dark',
                                                        // 'data-toggle'=>'modal',
                                                        'data-href' => yii::$app->request->baseUrl.'/courses/course-details?id='.$course->id,
                                                        // 'data-target'=>'#courseModal'
                                                        ]); ?>



                                    </div>
                                </div>
                            </div>

                        <?php endforeach; ?>

                  <?php endif; ?>
            </div>

                <div class="col-sm-12 text-center my-5">
                  <?=Html::a('Browse All Courses',Yii::$app->request->baseUrl.'/courses/index',
                                  ['class' => 'btn btn-danger course__link p-3 text-white']); ?>

                </div>


            </div>
        </div>
</section>
<!-- End Courses ====
======================================= -->

 <section id="collaborators">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center">
                        <h1>Our Alumni</h1>
                </div>

      <div class="portfolio section-padding pb-0" data-scroll-index="2">

              <div id="carouselExample" class="carousel slide mx-auto" data-ride="carousel" data-interval="1000">
                <div class="carousel-inner row w-100 " role="listbox">
                    <div class="carousel-item col-md-3 active">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">

                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item col-md-3">
                          <div class="team-block">
                                <div class="team-img">
                                    <img src="https://easetemplate.com/free-website-templates/motion/images/team_member_1.jpg" alt="">
                                    <div class="team-content">
                                        <h4 class="text-white mb0">Eliza Simon</h4>
                                        <p class="team-meta">- Producer</p>
                                    </div>
                                    <div class="overlay">
                                        <div class="text">
                                            <h4 class="mb0 text-white">Eliza Simon</h4>
                                            <p class="mb30 team-meta">- Producer</p>
                                            <p>Mauris tincidunt dolor eget diam dapibus vitae finibusnisl friuisque pretiuam egete euismod justam ac temlibern rutrum nisli in mi rhoncac pharetra odioacin ntesque dictum vel risus quis egeaecenas necese purus quaroin tincidunt neque malesuda vulputate lecton pretiume.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>



<!-- =====================================
==== Start about -->
<section class="about" data-scroll-index="1">
    <div class="bg-gray position-re">
        <div class="container">
            <div class="row">
                <div class="half-imgl bg-img" data-background="">
                    <?= Html::img('@web/images/project-500-logo.jpg', ['style'=>'background-position:contain!important'])?>
                </div>
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

<section class="portfolio section-padding pb-0" data-scroll-index="2">
        <div class="container-fluid">
            <div class="row">
                <div class="offset-md-2 col-md-8">
                    <div class="section-head">
                        <h4>Previous <span>Training</span></h4>
                    </div>
                </div>
                <div class="clear-fix"></div>
<<<<<<< HEAD
                <div class="container">
                    <!-- filter links -->
=======
                <!-- <div class="container">
                     filter links
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
                    <div class="filtering mb-50">
                        <span data-filter='*' class="active">All</span>
                        <span data-filter='.brand'>Brand</span>
                        <span data-filter='.web'>Design</span>
                        <span data-filter='.graphic'>Graphic</span>
                    </div>
<<<<<<< HEAD
                </div>
=======
                </div> -->
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
                <!-- gallery -->
                <div class="gallery text-center full-width">
                  <?php  if (count($galleries) > 0): ?>

                        <?php  foreach ($galleries as $gallery): ?>
                    <!-- gallery item -->
                    <div class="col-md-3 o-hidden items graphic">
                        <div class="item-img wow slideInLeft">
                            <?= Html::img('@web/uploads/training-gallery/thumbs/'.$gallery->photo,
                                 ['class' => '']
                                 ); ?>
                            <div class="item-img-overlay valign">
                                <div class="overlay-info full-width vertical-center">
                                    <h6>Delyork Creative Academy</h6>
                                    <p><?=$gallery->description; ?></p>
                                </div>

                                <a href="<?= Url::to('@web/uploads/training-gallery/thumbs/'.$gallery->photo)?>" class="popimg">
                                        <i class="fas fa-image"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                      <?php endforeach; ?>
                      <?php endif; ?>
                    <div class="clear-fix"></div>
                </div>
            </div>
        </div>
    </section>
