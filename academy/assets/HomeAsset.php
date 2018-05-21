<?php

namespace academy\assets;

use yii\web\AssetBundle;
use Yii;

/**
 * Main main application asset bundle.
 */
class HomeAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
     'css/landing_page/animate.css',
     'css/landing_page/bootstrap.min.css',
     'css/landing_page/font-awesome.min.css',
     'css/landing_page/style.css',
     'css/landing_page/menu.css',
    ];
    public $js = [];

    public $depends = [
      'yii\web\YiiAsset',
      'yii\bootstrap\BootstrapAsset',
      ];

    public function init()
    {
        parent::init();
        if (Yii::$app->controller->id == 'site' && Yii::$app->controller->action->id == 'index') {
            $this->js[] = 'js/landing_page/jquery1.2.4.js';
            $this->js[] = 'js/landing_page/bootstrap.min.js';
            $this->js[] = 'js/landing_page/menu.js';
            $this->js[] = 'js/landing_page/script.js';
            $this->js[] = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js
';
        }
    }
}
