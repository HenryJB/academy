<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;

/* @var $this yii\web\View */
/* @var $model common\models\TrainingGallery */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="training-gallery-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'photo')->widget(FileInput::classname(), [
        'options' => ['accept' => 'image/*'],
        'pluginLoading' => true,


      ]);
   ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

  
    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
