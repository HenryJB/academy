<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;

/* @var $this yii\web\View */
/* @var $model common\models\CeoPhoto */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="ceo-photo-form">
  <!-- Start Page Content -->
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">

                <?php $form = ActiveForm::begin(); ?>
                <?= $form->field($model, 'photo[]')->widget(FileInput::classname(), [
                    'options' => ['accept' => 'image/*', 'multiple' => true],
                    'pluginLoading' => true,


                  ]);
                ?>

                <?= $form->field($model, 'description')->textarea(['rows' => 6]) ?>

                <div class="form-group">
                    <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
                </div>

                <?php ActiveForm::end(); ?>

             </div>
          </div>
      </div>
  </div>
</div>
