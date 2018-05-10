<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:** -->
    <!--[if lt IE 9]>
    <script src="https:**oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https:**oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body class="fix-header fix-sidebar">
<?php $this->beginBody() ?>
<!-- Preloader - style you can find in spinners.css -->
<div class="preloader">
    <svg class="circular" viewBox="25 25 50 50">
  <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
</div>

<!-- Main wrapper  -->
<div id="main-wrapper">
    <!-- header header  -->
    <div class="header">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
            <!-- Logo -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <!-- Logo icon -->
                    <b>Del-York</b>
                    <!--End Logo icon -->
                    <!-- Logo text -->

                </a>
            </div>
            <!-- End Logo -->
            <div class="navbar-collapse">
                <!-- toggle and nav items -->
                <ul class="navbar-nav mr-auto mt-md-0">
                    <!-- This is  -->
                    <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted  " href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
                    <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted  " href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                    <!-- Messages -->
                    
                    <!-- End Messages -->
                </ul>
                <!-- User profile and search -->
                <ul class="navbar-nav my-lg-0">

                    <!-- Search -->
                    <li class="nav-item hidden-sm-down search-box"> <a class="nav-link hidden-sm-down text-muted  " href="javascript:void(0)"><i class="ti-search"></i></a>
                        <form class="app-search">
                            <input type="text" class="form-control" placeholder="Search here"> <a class="srh-btn"><i class="ti-close"></i></a> </form>
                    </li>
                    <!-- Comment -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-bell"></i>
            <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
          </a>
                        <div class="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
                            <ul>
                                <li>
                                    <div class="drop-title">Notifications</div>
                                </li>
                                <li>
                                    <div class="message-center">
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="btn btn-danger btn-circle m-r-10"><i class="fa fa-link"></i></div>
                                            <div class="mail-contnet">
                                                <h5>This is title</h5> <span class="mail-desc">Just see the my new admin!</span> <span class="time">9:30 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="btn btn-success btn-circle m-r-10"><i class="ti-calendar"></i></div>
                                            <div class="mail-contnet">
                                                <h5>This is another title</h5> <span class="mail-desc">Just a reminder that you have event</span> <span class="time">9:10 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="btn btn-info btn-circle m-r-10"><i class="ti-settings"></i></div>
                                            <div class="mail-contnet">
                                                <h5>This is title</h5> <span class="mail-desc">You can customize this template as you want</span> <span class="time">9:08 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="btn btn-primary btn-circle m-r-10"><i class="ti-user"></i></div>
                                            <div class="mail-contnet">
                                                <h5>This is another title</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- End Comment -->
                    <!-- Messages -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted  " href="#" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-envelope"></i>
            <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
          </a>
                        <div class="dropdown-menu dropdown-menu-right mailbox animated zoomIn" aria-labelledby="2">
                            <ul>
                                <li>
                                    <div class="drop-title">You have 4 new messages</div>
                                </li>
                                <li>
                                    <div class="message-center">
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="user-img">
                                              <?= Html::img('@web/images/users/5.jpg', ['alt'=>'user', 'class'=>'img-circle'])?>

                                               <span class="profile-status online pull-right"></span> </div>
                                            <div class="mail-contnet">
                                                <h5>Michael Qin</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="user-img">
                                              <?= Html::img('@web/images/users/2.jpg', ['alt'=>'user', 'class'=>'img-circle'])?>
                                               <span class="profile-status busy pull-right"></span> </div>
                                            <div class="mail-contnet">
                                                <h5>John Doe</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="user-img">
                                            <?= Html::img('@web/images/users/3.jpg', ['alt'=>'user', 'class'=>'img-circle'])?>
                                              <span class="profile-status away pull-right"></span> </div>
                                            <div class="mail-contnet">
                                                <h5>Mr. John</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span>
                                            </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="#">
                                            <div class="user-img">
                                                <?= Html::img('@web/images/users/4.jpg', ['alt'=>'user', 'class'=>'img-circle'])?>
                                              <span class="profile-status offline pull-right"></span> </div>
                                            <div class="mail-contnet">
                                                <h5>Michael Qin</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a class="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i class="fa fa-angle-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- End Messages -->
                    <!-- Profile -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/users/5.jpg" alt="user" class="profile-pic" /></a>
                        <div class="dropdown-menu dropdown-menu-right animated zoomIn">
                            <ul class="dropdown-user">
                                <li><a href="#"><i class="ti-user"></i> Profile</a></li>
                                <li><a href="#"><i class="ti-wallet"></i> Balance</a></li>
                                <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                <li><a href="#"><i class="ti-settings"></i> Setting</a></li>
                                <li><a href="site/logout"><i class="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- End header header -->
    <!-- Left Sidebar  -->
    <div class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li class="nav-devider"></li>
                    <li class="nav-label"><?= Html::a('Dashboard', ['site/index'], ['class' => '']) ?></li>

                    <li class="nav-label">Apps</li>
                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-envelope"></i><span class="hide-menu">Requests</span></a>
                        <ul aria-expanded="false" class="collapse">

                            <li><?= Html::a('Compose', ['mail/create'], ['class' => '']) ?></li>
                            <li><?= Html::a('Read', ['site/index'], ['class' => '']) ?></li>
                            <li><?= Html::a('Inbox', ['site/index'], ['class' => '']) ?></li>
                        </ul>
                    </li>

                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-list"></i><span class="hide-menu">Services</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><?= Html::a('New', ['services/create'], ['class' => '']) ?></li>
                            <li><?= Html::a('Services', ['services/index'], ['class' => '']) ?></li>
                        </ul>
                    </li>

                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-list"></i><span class="hide-menu">About</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><?= Html::a('New', ['abouts/create'], ['class' => '']) ?></li>
                            <li><?= Html::a('Del-York', ['abouts/index'], ['class' => '']) ?></li>
                            <li><?= Html::a('The CEO', ['ceo/index'], ['class' => '']) ?></li>
                            <li><?= Html::a('CEO Photos', ['ceo-photos/index'], ['class' => '']) ?></li>
                        </ul>
                    </li>

                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-list"></i><span class="hide-menu">Posts</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><?= Html::a('New', ['posts/create'], ['class' => '']) ?></li>
                            <li><?= Html::a('Posts', ['posts/index'], ['class' => '']) ?></li>
                        </ul>
                    </li>
                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-users"></i><span class="hide-menu">Clients</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><?= Html::a('New', ['clients/create'], ['class' => 'dropdown-item']) ?></li>
                            <li><?= Html::a('Clients', ['clients/index'], ['class' => 'dropdown-item']) ?></li>

                        </ul>
                    </li>

                    <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-file-o"></i><span class="hide-menu">Portfolios</span></a>
                        <ul aria-expanded="false" class="collapse">
                            <li><?= Html::a('New', ['portfolios/create'], ['class' => '']) ?></li>
                            <li><?= Html::a('Portfolios', ['portfolios/index'], ['class' => '']) ?></li>
                            <li><?= Html::a('Portfolios Galleries', ['portfolio-images/index'], ['class' => '']) ?></li>

                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </div>
    <!-- End Left Sidebar  -->
    <!-- Page wrapper  -->
    <div class="page-wrapper">
        <!-- Bread crumb -->
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-primary">Dashboard</h3> </div>
            <div class="col-md-7 align-self-center">

                  <?= Breadcrumbs::widget([
                      'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
                  ]) ?>

            </div>
        </div>
        <!-- End Bread crumb -->

        <!-- Container fluid  -->
          <div class="container-fluid">
            <?= $content ?>
        </div>
        <!-- Container fluid  -->

      </div>
      <!-- End Container fluid  -->
      <!-- footer -->
      <footer class="footer"> Del-York Creative © 2018 All rights reserved. </footer>
      <!-- End footer -->
      </div>
      <!-- End Page wrapper  -->


<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
