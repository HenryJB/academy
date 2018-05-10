<?php

namespace academy\assets;

use yii\web\AssetBundle;

/**
 * Main main application asset bundle.
 */
class UtilityAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
     'css/plugins.css',
     'css/style.css',
     'css/custom.css',
     'font-awesome/css/font-awesome.css',

    ];
    public $js = [
      'js/jquery-3.0.0.min.js',
      'js/jquery-migrate-3.0.0.min.js',
      'js/popper.min.js',
      'js/bootstrap.min.js',
      'js/scrollIt.min.js',
      'js/jquery.waypoints.min.js',
      'js/jquery.counterup.min.js',
      'js/owl.carousel.min.js',
      'js/jquery.magnific-popup.min.js',
      'js/lity.min.js',
      'js/jquery.stellar.min.js',
      'js/isotope.pkgd.min.js',
      'js/map.js',
      'js/validator.js',
      'js/wow.min.js',
      'js/wow-init.js',

    ];
    public $depends = [
        'yii\web\YiiAsset',
       'yii\bootstrap\BootstrapAsset',
    ];
}
