<?php

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * Main backend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/lib/chartist/chartist.min.css',
        'css/lib/owl.carousel.min.css',
        'css/lib/owl.theme.default.min.css',
        'css/lib/bootstrap/bootstrap.min.css',
        'css/helper.css',
        'css/style.css'
    ];
    public $js = [
  
      'js/lib/bootstrap/js/popper.min.js',
      'js/lib/bootstrap/js/bootstrap.min.js',
      'js/jquery.slimscroll.js',
      'js/sidebarmenu.js',
      'js/lib/sticky-kit-master/dist/sticky-kit.min.js',
      'js/lib/datamap/d3.min.js',
      'js/lib/datamap/topojson.js',
      'js/lib/datamap/datamaps.world.min.js',
      'js/lib/datamap/datamap-init.js',
      'js/lib/weather/jquery.simpleWeather.min.js',
      'js/lib/weather/weather-init.js',
      'js/lib/owl-carousel/owl.carousel.min.js',
      'js/lib/owl-carousel/owl.carousel-init.js',
      'js/lib/chartist/chartist.min.js',
      'js/lib/chartist/chartist-plugin-tooltip.min.js',
      'js/lib/chartist/chartist-init.js',
      'js/custom.min.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
