<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Ceo */

$this->title = 'Create Ceo';
$this->params['breadcrumbs'][] = ['label' => 'Ceos', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ceo-create">

    <h3><?= Html::encode($this->title) ?></h3>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
