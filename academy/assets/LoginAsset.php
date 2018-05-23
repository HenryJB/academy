<?php

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * Main backend application asset bundle.
 */
class LoginAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/vendor/bootstrap/css/bootstrap.min.css',
        'fonts/font-awesome-4.7.0/css/font-awesome.min.css',
        'fonts/iconic/css/material-design-iconic-font.min.css',
        'css/vendor/animate/animate.css',
        'css/vendor/css-hamburgers/hamburgers.min.css',
        'css/vendor/animsition/css/animsition.min.css',
        'css/vendor/select2/select2.min.css',
        'css/vendor/daterangepicker/daterangepicker.css',
        'css/util.css',
        'css/main.css'
    ];
    public $js = [
      'css/vendor/animsition/js/animsition.min.js',
      'css/vendor/bootstrap/js/popper.js',
      'css/vendor/bootstrap/js/bootstrap.min.js',
      'css/vendor/select2/select2.min.js',
      'css/vendor/daterangepicker/moment.min.js',
      'css/vendor/daterangepicker/daterangepicker.js',
      'css/vendor/countdowntime/countdowntime.js',
      'js/main.js'

    ];
    public $depends = [
        // 'yii\web\YiiAsset',
        // 'yii\bootstrap\BootstrapAsset',
    ];
}
