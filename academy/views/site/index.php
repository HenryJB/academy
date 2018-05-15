<?php

/* @var $this yii\web\View */
use yii\helpers\Html;
use yii\helpers\Url;

$this->title = 'Del-York Academy';
?>

    <div class="container-fluid navbar-fixed-top">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="">
                        <?= Html::img('@web/img/landing_page/logo.png'); ?>
                    </a>
                </div>



                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li class="harmburger__menu">
                            <a href="#" class="overlay-menu" data-toggle="modal" data-target="#myModal">
                                <span class="glyphicon glyphicon-menu-hamburger"></span>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="" id="apply_now">
                            <?=Html::a('APPLY NOW', Yii::$app->request->baseUrl.'/students/create', ['class' => 'btn btn-outline']); ?>

                        </li>

                        <li class="">
                            <?=Html::a('LOGIN', Yii::$app->request->baseUrl.'/students/login', ['class' => 'btn btn-outline']); ?>

                        </li>

                        <li>
                            <a href="#" class="social-media">
                                <span class="fa fa-facebook"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-media">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-media">
                                <span class="fa fa-instagram"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
            <!--/.container-fluid -->
        </nav>
    </div>


    <div class="container-fluid remove-padding">
        <div class="row hidden-md hidden-lg">
            <a href="<?=Url::to(Yii::$app->request->baseUrl.'/courses/index'); ?>" class="mobile__film__link">
                <div class="col-xs-12 col-sm-6" id="first__mobile">
                    <img src="<?=Url::to('@web/img/landing_page/film1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/film1.png'); ?>"
                        data-hover="<?=Url::to('@web/img/landing_page/film2.png'); ?>" id="image_mobile_one" class="img-responsive">

                    <div class="overlay_text_film">
                        <div class="center-block">
                            <div class="course_category text-center">
                                <h1 class="ml1 ">
                                    <span class="text-wrapper">
                                        <span class="letters letters-left" id="txtborder" data-text="FILM">FILM</span>
                                    </span>
                                </h1>

                            </div>
                            <div class="course_description_one">
                                <a href="" class="text-center text-white"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a href="" class="mobile__art__link">
                <div class="col-sm-6" id="second__mobile">
                    <img src="<?=Url::to('@web/img/landing_page/media1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/media1.png'); ?>"
                        data-hover="<?=Url::to('@web/img/landing_page/media2.png'); ?>" id="image_mobile_two" class="img-responsive">
                    <div class="overlay_text_media">
                        <div class="center-block">
                            <div class="course_category text-center">
                                <h1 class="ml2">
                                    <span class="text-wrapper">

                                        <span class="letters letters-left" id="txtborder" data-text="MEDIA">MEDIA</span>

                                    </span>
                                </h1>

                            </div>
                            <div class="course_description_two">
                                <a href="" class="text-center text-white"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href="" class="mobile__art__link">
                <div class="col-sm-6" id="third__mobile">
                    <img src="<?=Url::to('@web/img/landing_page/art1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/art1.png'); ?>"
                        data-hover="<?=Url::to('@web/img/landing_page/art2.png'); ?>" id="image_mobile_three" class="img-responsive">
                    <div class="overlay_text_art">
                        <div class="center-block">
                            <div class="course_category text-center">
                                <h1 class="ml3">
                                    <span class="text-wrapper">

                                        <span class="letters letters-left" id="txtborder">ART</span>
                                    </span>
                                </h1>
                            </div>
                            <div class="course_description_three">
                                <a href="" class="text-center text-white"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a href="" class="mobile__tech__link">
                <div class="col-sm-6" id="fourth__mobile">
                    <img src="<?=Url::to('@web/img/landing_page/tech1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/tech1.png'); ?>"
                        data-hover="<?=Url::to('@web/img/landing_page/tech2.png'); ?>" id="image_mobile_four" class="img-responsive">
                    <div class="overlay_text_tech">
                        <div class="center-block">
                            <div class="course_category text-center">
                                <h1 class="ml4">
                                    <span class="text-wrapper">
                                        <span class="letters letters-left" id="txtborder">TECH</span>
                                    </span>
                                </h1>
                            </div>
                            <div class="course_description_four">
                                <a href="" class="text-center text-white"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    </div>

    <div class="container-fluid hidden-xs hidden-sm">
        <div class="row poly--holder">
            <div class="grid">

                <a href="<?=Url::to(Yii::$app->request->baseUrl.'/courses/index'); ?>" class="mobile__art__link">
                    <div class="poly-item first" id="first">
                        <img src=<?=Url::to('@web/img/landing_page/film1.png'); ?> alt="" data-src=
                        <?=Url::to('@web/img/landing_page/film1.png'); ?> data-hover="
                            <?=Url::to('@web/img/landing_page/film2.png'); ?>" class="img-responsive center-block" id="image_one">
                                <div class="overlay_text_film">
                                    <div class="center-block">
                                        <div class="course_category text-center">
                                            <h1 class="ml1 ">
                                                <span class="text-wrapper">
                                                    <span class="letters letters-left" id="txtborder" data-text="FILM">FILM</span>
                                                </span>
                                            </h1>


                                        </div>
                                        <div class="course_description_one">
                                            <a href="" class="text-center text-white"></a>
                                        </div>
                                    </div>
                                </div>
                    </div>


                    <a href="<?=Url::to(Yii::$app->request->baseUrl.'/courses/index'); ?>">
                        <div class="poly-item second" id="second">
                            <img src="<?=Url::to('@web/img/landing_page/media1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/media1.png'); ?>"
                                data-hover="<?=Url::to('@web/img/landing_page/media2.png'); ?>" alt="" class="img-responsive  center-block"
                                id="image_two">
                            <div class="overlay_text_media">
                                <div class="center-block">
                                    <div class="course_category text-center">
                                        <h1 class="ml2">
                                            <span class="text-wrapper">

                                                <span class="letters letters-left" id="txtborder" data-text="MEDIA">MEDIA</span>

                                            </span>
                                        </h1>

                                    </div>
                                    <div class="course_description_two">
                                        <a href="" class="text-center text-white"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="<?=Url::to(Yii::$app->request->baseUrl.'/courses/index'); ?>">
                        <div class="poly-item third" id="third">
                            <img src="<?=Url::to('@web/img/landing_page/art1.png'); ?>" alt="" data-src="<?= Url::to('@web/img/landing_page/art1.png'); ?>"
                                data-hover="<?= Url::to('@web/img/landing_page/art2.png'); ?>" class="img-responsive  center-block"
                                id="image_three">
                            <div class="overlay_text_art">
                                <div class="center-block">
                                    <div class="course_category text-center">
                                        <h1 class="ml3">
                                            <span class="text-wrapper">

                                                <span class="letters letters-left" id="txtborder">ART</span>
                                            </span>
                                        </h1>
                                    </div>
                                    <div class="course_description_three">
                                        <a href="" class="text-center text-white"></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </a>

                    <a href="<?=Url::to(Yii::$app->request->baseUrl.'/courses/index'); ?>">
                        <div class="poly-item fourth" id="fourth">
                            <img src="<?=Url::to('@web/img/landing_page/tech1.png'); ?>" alt="" data-src="<?=Url::to('@web/img/landing_page/tech1.png'); ?>"
                                data-hover="<?=Url::to('@web/img/landing_page/tech2.png'); ?>" alt="" class="img-responsive center-block"
                                id="image_four">
                            <div class="overlay_text_tech">
                                <div class="center-block">
                                    <div class="course_category text-center">
                                        <h1 class="ml4">
                                            <span class="text-wrapper">
                                                <span class="letters letters-left" id="txtborder">TECH</span>
                                            </span>
                                        </h1>
                                    </div>
                                    <div class="course_description_four">
                                        <a href="" class="text-center text-white"></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </a>

            </div>
        </div>
    </div>


    <footer class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
            <div>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <p>Copy Right 2018 © By DCA All Rights Reserved</p>
                    </li>
                </ul>


            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </footer>
