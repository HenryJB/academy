<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\AlumniProject */

$this->title = 'Create Alumni Project';
$this->params['breadcrumbs'][] = ['label' => 'Alumni Projects', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="alumni-project-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
