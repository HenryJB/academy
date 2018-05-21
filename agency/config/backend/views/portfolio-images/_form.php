<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;
use common\models\Portfolio;


/* @var $this yii\web\View */
/* @var $model common\models\PortfolioImage */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="portfolio-image-form">

    <?php $form = ActiveForm::begin(); ?>
    <?php
    $items = Portfolio::find()
            ->select(['title'])
            ->indexBy('id')
            ->column();
            echo $form->field($model, 'portfolio_id')->dropDownList(['text' => 'Please select', 'options' => $items])
            ->label(false);
    ?>

    <?= $form->field($model, 'photos[]')->widget(FileInput::classname(), [
        'options' => ['accept' => 'image/*', 'multiple' => true],
        'pluginLoading' => true,
        

      ]);
   ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
