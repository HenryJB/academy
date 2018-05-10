<?php

namespace main\assets;

use yii\web\AssetBundle;

/**
 * Main main application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        //'css/bootstrap.min.css',
        'css/font-awesome.min.css',
        'css/icomoon-fonts.css',
        'css/animate.min.css',
        'css/settings.css',
        'css/owl.carousel.css',
        'css/jquery.fancybox.css',
        'css/zerogrid.css',
        'css/jPushMenu.css',
        'css/onepage.css',
        'css/one-color.css',
    ];
    public $js = [
      'js/jquery2.1.4.js',
      'js/bootstrap.min.js',
      'js/jquery.themepunch.tools.min.js',
      'js/jquery.themepunch.revolution.min.js',
      'js/jquery.easing.min.js',
      'js/owl.carousel.min.js',
      'js/jquery_counto.js',
      'js/jquery.appear.js',
      'js/jquery.circliful.js',
      'js/jquery.mixitup.min.js',
      'js/wow.min.js',
      'js/jquery.parallax-1.1.3.js',
      'js/jquery.fancybox.js',
      'js/jquery.fancybox-thumbs.js',
      'js/jquery.fancybox-media.js',
      'js/jPushMenu.js',
      'js/functions.js',
      'js/tooglemenu.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
