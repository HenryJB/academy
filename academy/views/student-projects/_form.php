<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\StudentProject */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="student-project-form">

    <?php $form = ActiveForm::begin(['action' => Yii::$app->request->baseUrl.'/student-projects/create', 'options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'student_id')->textInput(); ?>

    <?= $form->field($model, 'title')->textInput(['maxlength' => true]); ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 6]); ?>

    <?= $form->field($model, 'attachment')->fileInput(); ?>

    <?= $form->field($model, 'date')->input('date'); ?>

    <?= $form->field($model, 'url')->textInput(['maxlength' => true]); ?>

    <?= $form->field($model, 'type')->dropDownList(['audio' => 'Audio', 'photo' => 'Photo', 'text' => 'Text', 'video' => 'Video'], ['prompt' => '']); ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success', 'id' => 'submitProject']); ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
