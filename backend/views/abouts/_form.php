<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use dosamigos\tinymce\TinyMce;
use kartik\file\FileInput;

/* @var $this yii\web\View */
/* @var $model common\models\About */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="about-form">


  <!-- Start Page Content -->
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">

                <?php $form = ActiveForm::begin(); ?>

                <?= $form->field($model, 'title')->textInput(['maxlength' => true]) ?>

                <?= $form->field($model, 'body')->widget(TinyMce::className(), [
                  'options' => ['rows' => 10],
                  'language' => 'en',
                  'clientOptions' => [
                      'plugins' => [
                          "advlist autolink lists link charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table contextmenu paste"
                      ],
                      'toolbar' => "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
                  ]
              ]);?>
                <?= $form->field($model, 'photo')->widget(FileInput::classname(), [
                    'options' => ['accept' => '*'],
                    'pluginOptions' => [
                      'initialPreviewAsData'=>true,
                      'overwriteInitial'=>false,
                      'showPreview' => true,
                      'showCaption' => true,
                      'showRemove' => true,
                    ],
                  ]);
               ?>

                <div class="form-group">
                    <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
                </div>

                <?php ActiveForm::end(); ?>

             </div>
          </div>
      </div>
  </div>


</div>
