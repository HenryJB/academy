<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use main\assets\AppAsset;

AppAsset::register($this);

?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language; ?>">

<head>
    <meta charset="<?= Yii::$app->charset; ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags(); ?>
    <title>
        <?= Html::encode($this->title); ?>
    </title>
    <?php $this->head(); ?>

    <!--CSS-->
    <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400%7COpen+Sans:400,300' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" href="images/favicon.png">
</head>

<body>

    <?php $this->beginBody(); ?>

    <div class="loader">
        <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>

        </div>
    </div>




    <!-- Main-Navigation -->
    <!-- Main-Navigation -->
    <header id="main-navigation">
        <div id="navigation" data-spy="affix" data-offset-top="20">
            <div class="container">
                <div class="row">
                    <div class="col-md-12  hidden-md hidden-lg">
                        <ul class="top-right text-right">

                            <li>
                                <a href="#." class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#." class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    About us
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul>
                                        <li>
                                            <a class="dropdown-item" href="">History</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="http://localhost/delyork/main/web/ceo/index">Meet the CEO</a>
                                        </li>
                                    </ul>



                                </div>
                            </li>

                            <li>
                                <a href="http://localhost/delyork/agency/web/" class="page-scroll" target="_blank">Creative Agency</a>
                            </li>
                            <li>
                                <a href="http://localhost/delyork/academy/web/" class="page-scroll" target="_blank">Creative Academy</a>

                            </li>
                            <li>
                                <a href="#." class="instagram">
                                    <i class="icon-instagram"></i>
                                </a>
                            </li>
                        </ul>

                        <nav class="navbar navbar-primary ">
                            <div class="navbar-header page-scroll">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#fixed-collapse-navbar" aria-expanded="true">
                                    <span class="icon-bar top-bar"></span>
                                    <span class="icon-bar middle-bar"></span>
                                    <span class="icon-bar bottom-bar"></span>
                                </button>
                                <a class="navbar-brand logo" href="#">
                                    <img src="images/delyork-logo.gif" alt="logo" style="width:30px !important; height:30px!important" class="img-responsive">
                                </a>
                            </div>

                            <div id="fixed-collapse-navbar" class="navbar-collapse collapse navbar-right">
                                <ul class="nav navbar-nav">
                                    <li class="hidden">


                                    </li>
                                    <li class="active">
                                        <?= Html::a('Home', ['index'], ['class' => 'page-scroll']); ?>

                                    </li>
                                    <li>
                                        <a href="http://localhost/delyork/agency/web/" class="page-scroll">Creative Agency</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost/delyork/academy/web/" class="page-scroll">Creative Academy</a>

                                    </li>
                                    <li>
                                        <a hrefhref="http://localhost/delyork/agency/web/" class="page-scroll">Blog</a>
                                    </li>

                                    <li>
                                        <a href="http://localhost/delyork/agency/web/contact" class="page-scroll">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- New menu style -->
                    <div class="col-md-12 hidden-xs hidden-sm">
                        <ul class="top-right text-right">
                            <li>
                                <a href="#." class="menu-bar">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </li>

                        </ul>

                        <nav class="navbar navbar-default">
                            <div class="navbar-header page-scroll">
                                <a class="navbar-brand logo" href="#">
                                    <img src="images/delyork-logo.gif" alt="logo" style="width:30px !important; height:30px!important" class="img-responsive">
                                </a>
                            </div>

                            <div class="hidden" id="menu-content">
                                <div id="fixed-collapse-navbar" class="navbar-collapse collapse navbar-right">
                                    <ul class="nav navbar-nav">

                                        <li class="active">
                                            <?= Html::a('Home', ['index'], ['class' => 'page-scroll']); ?>

                                        </li>
                                        <li>
                                            <a href="http://localhost/delyork/agency/web/" class="page-scroll">Creative Agency</a>
                                        </li>
                                        <li>
                                            <a href="http://localhost/delyork/academy/web/" class="page-scroll">Creative Academy</a>

                                        </li>
                                        <li>
                                            <a hrefhref="http://localhost/delyork/agency/web/" class="page-scroll">Blog</a>
                                        </li>

                                        <li>
                                            <a href="http://localhost/delyork/agency/web/contact" class="page-scroll">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#." class="facebook">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#." class="twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#." class="instagram">
                                                <i class="icon-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <!-- end menu style -->
                </div>
            </div>
        </div>
    </header>




    <?= $content; ?>


    <?php $this->endBody(); ?>
</body>

</html>
<?php $this->endPage();
