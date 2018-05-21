<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use agency\assets\AppAsset;

AppAsset::register($this);

if (\Yii::getAlias('@device') == 'mobile' || \Yii::getAlias('@device') == 'tablet') {
    $this->registerCssFile('@web/css/media_queries/scrollbox.css',
    [
          'depends' => [\yii\bootstrap\BootstrapAsset::className(),
        ],
          'media' => 'screen',
      ], 'scrollbox');
    $this->registerCssFile('@web/css/media_queries/skewbox.css',
    [
          'depends' => [\yii\bootstrap\BootstrapAsset::className(),
        ],
          'media' => 'screen',
      ], 'skewbox');
} else {
    $this->registerCssFile('@web/css/media_queries/laptop_query.css', [
          'depends' => [\yii\bootstrap\BootstrapAsset::className()],
          'media' => 'screen',
      ], 'laptop');
}

?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language; ?>">
<head>
    <meta charset="<?= Yii::$app->charset; ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags(); ?>
    <title><?= Html::encode($this->title); ?></title>
    <?php $this->head(); ?>

    <!--CSS-->
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
  	<link href='https://fonts.googleapis.com/css?family=Ra leway:400,500,800,700,600,300,400italic' rel='stylesheet' type='text/css'>
  	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,300italic' rel='stylesheet' type='text/css'>
</head>
<body>

<?php $this->beginBody(); ?>
<div class="se-pre-con">
  <div class="cssload-container">
    <ul class="cssload-flex-container">
      <li>
        <span class="cssload-loading cssload-one"></span>
        <span class="cssload-loading cssload-two"></span>
        <span class="cssload-loading-center"></span>
      </li>
  </div>
</div>
<header class="cd-header">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 col-md-1 col-sm-2 col-xs-12">
        <div class="logo">
          <a href="#banner" data-scroll>
            <img src="img/delyork-logo.gif" alt="" width="30px" height="30px" />
          </a>
        </div>
      </div>
      <div class="col-lg-10 col-md-11 col-sm-10 col-xs-12">
        <nav class="nav-collapse">
          <ul>
            <li class="menu-item">
              <a href="" data-scroll>Home</a>
            </li>
            <li class="menu-item">
              <a href="#agency" data-scroll>Who We Are</a>
            </li>
            <li class="menu-item">
              <a href="#features" data-scroll>What We Do</a>
            </li>
            <li class="menu-item">
              <a href="#portfolios" data-scroll>Portfolios</a>
            </li>
            <li class="menu-item">
              <a href="#client" data-scroll>Clients</a>
            </li>
            <li class="menu-item">
              <a href="#ourteam" data-scroll>Team</a>
            </li>
            <!-- <li class="menu-item">
              <a href="#newblog" data-scroll>Blog</a>
            </li> -->
            <li class="menu-item">
              <a href="#contact" data-scroll>Contact</a>
            </li>
          </ul>
        </nav>
        <nav class="nav-social">
          <ul class="social">
            <li>
              <a href="https://www.facebook.com/delyorkagency/"
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/delyorkagency">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/delyorkagency/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li> <a href=" http://www.limkedin.com/company/delyorkagency">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
          </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
<!-- header -->


  <?= $content; ?>


  <footer>
    <div class="container">
      <div class="row">

        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p class="innersmall footerlogo">&copy; <?= Html::encode(Yii::$app->name); ?> <?= date('Y'); ?></p>
        </div>
      </div>
    </div>
  </footer>

<?php $this->endBody(); ?>
</body>
</html>
<?php $this->endPage(); ?>
