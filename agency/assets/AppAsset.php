<?php

namespace agency\assets;

use yii\web\AssetBundle;

/**
 * Main agency application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'font-awesome/font-awesome.min.css',
        'css/grid.css',
        'css/style.css',
        'css/responsive.css',
        'css/animate.css',
        'css/myanimate.css',
        'css/portfolio/bootstrap.min.css',
        'css/portfolio/swiper.min.css',
        'css/portfolio/style.css',
        'fonts/fonts.css',
    ];
    public $js = [
      'js/jquery.min.js',
      'js/fixed-responsive-nav.js',
      'js/script.js',
      'js/scroller.js',
      'js/waypoints.min.js',
      'js/typer.js',
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDk9KNSL1jTv4MY9Pza6w8DJkpI_nHyCnk',
      'js/google-map/map-active.js',
      'js/portfolio/bootstrap.min.js',
      'js/portfolio/smooth-scroll.js',
      'js/portfolio/swiper.min.js',
      'js/portfolio/isotope.pkgd.min.js',
      'js/portfolio/imagesloaded.pkgd.min.js',
      'js/portfolio/main.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
