<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use dosamigos\tinymce\TinyMce;

/* @var $this yii\web\View */
/* @var $model common\models\Contact */
/* @var $form yii\widgets\ActiveForm */
?>



<div class="col-lg-12">
  <h4>Register</h4>
    <div class="login-content card">
        <div class="login-form">
            <div class="contact-form">
                          <?php $form = ActiveForm::begin(); ?>
                          <div class="col-lg-5">
                              <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
                          </div>

                          <div class="col-lg-5">
                              <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>
                          </div>

                          <?= $form->field($model, 'phone_number')->textInput(['maxlength' => true]) ?>

                          <?= $form->field($model, 'message')->widget(TinyMce::className(), [
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

                          <div class="form-group">
                              <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
                          </div>

                          <?php ActiveForm::end(); ?>
                      </div>
                  </div>
            </div>
        </div>
