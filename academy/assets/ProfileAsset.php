<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace academy\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class ProfileAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        // 'css/site.css',

        'css/profile/bootstrap/bootstrap.min.css',
        'css/profile/bootstrap-themes.css',
        'css/profile/style.css',
        'css/profile/styleTheme1.css',
        'css/profile/styleTheme2.css',
        'css/profile/styleTheme3.css',
        'css/profile/styleTheme4.css',



    ];
    public $js = [
        'js/profile/jquery-3.1.1.min.js',
        'js/profile/jquery.min.js',
        'js/profile/jquery.ui.min.js',
        'js/profile/plugins/bootstrap/bootstrap.min.js',
        'js/profile/modernizr/modernizr.js',
        'js/profile/plugins/mmenu/jquery.mmenu.js',
        'js/profile/styleswitch.js',
        'js/profile/myscript.js',
        'js/profile/plugins/form/form.js',
        'js/profile/plugins/datetime/datetime.js',
        'js/profile/plugins/chart/chart.js',
        'js/profile/plugins/pluginsForBS/pluginsForBS.js',
        'js/profile/plugins/miscellaneous/miscellaneous.js',
        'js/profile/caplet.custom.js',
        'js/profile/plugins/vmap/jquery.vmap.js',
        'js/profile/plugins/vmap/maps/jquery.vmap.world.js',
        'js/profile/plugins/vmap/data/jquery.vmap.sampledata.js',
        'js/profile/plugins/owl-carousel/owl.carousel.js',
        'js/profile/plugins/owl-carousel/owl.carousel.css',
        'js/profile/plugins/owl-carousel/owl.theme.css',
        'js/profile/plugins/owl-carousel/owl.transitions.css',
        'js/profile/plugins/datable/jquery.dataTables.min.js',
        'js/custom-script.js',


    ];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
