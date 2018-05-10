<?php

/* @var $this \yii\web\View */
/* @var $content string */
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use academy\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
  <!-- Modal -->
  <div class="modal fade" id="courseModal" tabindex="-1" role="dialog" aria-labelledby="courseModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
              <div class="modal-header">

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">

              </div>

          </div>
      </div>
  </div>
  <!-- Modal -->
  <!-- =====================================
  ==== Start Loading -->
  <div class="loading">
      <div class="text-center middle">
          <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  </div>
  <!-- End Loading ====
  ======================================= -->

<?php $this->beginBody() ?>

<!-- =====================================
==== Start Navbar -->

<nav class="navbar navbar-dark navbar-expand-lg  justify-content-between">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse dual-nav w-100">
        <ul class="navbar-nav">
            <li class="nav-item">

                    <?=Html::a('HOME', Yii::$app->request->baseUrl.'/site/index', ['class'=>'nav-link pl-0'])?>

            </li>

            <li class="nav-item">

                    <?=Html::a('About', Yii::$app->request->baseUrl.'/site/about', ['class'=>'nav-link pl-0'])?>

            </li>
            <li class="nav-item">

                  <?=Html::a('COURSES', Yii::$app->request->baseUrl.'/courses/index', ['class'=>'nav-link'])?>
            </li>
            <li class="nav-item">
              <?=Html::a('ALUMNI', Yii::$app->request->baseUrl.'/alumni/index', ['class'=>'nav-link'])?>

            </li>
            <li class="nav-item">

                  <?=Html::a('INSTRUCTORS', Yii::$app->request->baseUrl.'/instructors/index', ['class'=>'nav-link'])?>
            </li>

        </ul>
    </div>
    <a href="/" class="navbar-brand mx-auto d-block text-cente">
        <img src="../../web/images/dcalogo.png" alt="" id="img-brand">
    </a>
    <div class="navbar-collapse collapse dual-nav w-100">
        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" id="apply_now">
              <?=Html::a('APPLY NOW', Yii::$app->request->baseUrl.'/students/create', ['class'=>'btn btn-outline-white  btn-danger'])?>

            </li>
            <li class="nav-item" id="login">
                <?=Html::a('LOGIN', Yii::$app->request->baseUrl.'/students/login', ['class'=>'btn btn-outline-white text-white'])?>

            </li>
            <li class="nav-item">
                <a class="btn  text-white" href="">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>

            <li class="nav-item">
                <a class="btn text-white" href="">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="btn  text-white" href="">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</nav>
<!-- End Navbar ====
======================================= -->
    <?= $content ?>
<!-- =====================================
==== Start Footer -->
<footer class="section-padding">
    <div class="container text-center">

        <a class="logo" href="#">
            <img src="../../web/images/logo_white.png" alt="logo">
        </a>

        <div class="social-icon">
            <a href="#0">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#0">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#0">
                <i class="fab fa-pinterest-p"></i>
            </a>
            <a href="#0">
                <i class="fab fa-behance"></i>
            </a>
            <a href="#0">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="#0">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        <p>Copy Right 2018 &copy; By Infinity All Rights Reserved</p>
    </div>
</footer>
<!-- End Footer ====
======================================= -->
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
