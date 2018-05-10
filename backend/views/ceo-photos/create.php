<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\CeoPhoto */

$this->title = 'Create Ceo Photo';
$this->params['breadcrumbs'][] = ['label' => 'Ceo Photos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ceo-photo-create">

    <h3><?= Html::encode($this->title) ?></h3>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
