<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;
use yii\helpers\ArrayHelper;
use common\models\Alumni;
use common\models\AlumniProject;


/* @var $this yii\web\View */
/* @var $model common\models\AlumniProject */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="alumni-project-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php
    $items = Alumni::find()
        ->select(['first_name'])
        ->indexBy('id')
        ->column();
    echo $form->field($model, 'alumni_id')->dropDownList(['text' => 'Please select Alumni', 'options' => $items])->label(false);
    ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>


    <?= $form->field($model, 'date')->textInput() ?>

    <?= $form->field($model, 'attachment_url')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'attachment[]')->widget(FileInput::classname(), [
        'options' => ['accept' => 'pdf/*,image/*', 'multiple' => false],
        'pluginLoading' => true,
    ]);
    ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
