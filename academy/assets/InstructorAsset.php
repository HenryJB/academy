<?php

namespace academy\assets;

use yii\web\AssetBundle;

/**
 * Main main application asset bundle.
 */
class InstructorAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
      'css/plugins.css',
      'css/instructors.css',
    ];
    public $js = [
          //'js/jquery-3.0.0.min.js',
          'js/jquery.2.1.3.js',
          'js/lib/jquery.easing.min.js',
          'js/bootstrap.min.js',
          'js/scripts.js',
          'js/register.js',

    ];


    public $depends = [
      //  'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
