<?php

namespace academy\assets;

use yii\web\AssetBundle;
use Yii;

/**
 * Main main application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
     'css/plugins.css',
     'css/style.css',
     'css/custom.css',
     'css/combined.css',
     'font-awesome/font-awesome.min.css',
     'css/register.css',
    ];
    public $js = [
     'js/jquery-3.0.0.min.js',
     'js/jquery-migrate-3.0.0.min.js',
     'js/jquery.waypoints.min.js',
     'js/jquery.counterup.min.js',
     'js/jquery.magnific-popup.min.js',
     'js/jquery.stellar.min.js',
     'js/popper.min.js',
     'js/bootstrap.min.js',
     'js/scrollIt.min.js',
     'js/owl.carousel.min.js',
      'js/lity.min.js',
      'js/isotope.pkgd.min.js',
      'js/scripts.js',
      'js/validator.js',
      'js/wow.min.js',
      'js/wow-init.js',
      'js/course.js',
      'js/custom.js',
    ];

    public $depends = [
      'yii\web\YiiAsset',
      'yii\bootstrap\BootstrapAsset',
      ];

    //   public function init()
    // {
    //     parent::init();
    //     if(Yii::$app->controller->id=='site'){
    //       $this->depends[] = 'yii\web\YiiAsset';
    //       $this->depends[] =  'yii\bootstrap\BootstrapAsset';
    //     }
    //
    // }
}
