<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use common\models\AfricanState;
use common\models\Course;

/* @var $this yii\web\View */
/* @var $model common\models\Student */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="student-form">

    <?php $form = ActiveForm::begin(); ?>
    <div class="col-lg-6">
      <?= $form->field($model, 'first_name')->textInput() ?>
    </div>
    <div class="col-lg-6">
      <?= $form->field($model, 'last_name')->textInput(['maxlength' => true]) ?>
    </div>

    <div class="col-lg-6">
          <?= $form->field($model, 'email_address')->textInput(['maxlength' => true]) ?>
    </div>

    <div class="col-lg-6">
      <div class="col-lg-6">
              <?= $form->field($model, 'gender')->textInput(['maxlength' => true]) ?>
      </div>
      <div class="col-lg-6">
        <?= $form->field($model, 'date_of_birth')->textInput(['type'=>'date']) ?>
      </div>

    </div>

    <div class="col-lg-6">
          <?= $form->field($model, 'contact_address')->textarea(['rows' => 6]) ?>
    </div>

    <div class="col-lg-6">
      <?= $form->field($model, 'country')->dropDownList(
                ArrayHelper::map(AfricanState::find()

                        ->groupBy('country')
                        ->all(),
                        'country',
                        'country'
                      ),
                ['prompt' => 'Please select',
                 'onchange'=>'
                       $.post( "'.Yii::$app->urlManager->createUrl('student/related-states?id=').'"+$(this).val(), function( data ) {
                         $( "select#student-state_id" ).html( data );
                       });

                 ']);
      ?>
    </div>


<div class="col-lg-6">

  <?= $form->field($model, 'state_id')->dropDownList(
            ArrayHelper::map(AfricanState::find()
                    ->groupBy('country')
                    ->all(),
                    'state_id',
                    'state_name'
                  ),
            ['prompt' => 'Please select',

         ]);
  ?>


</div>


<div class="col-lg-6">
  <?= $form->field($model, 'first_choice')->dropDownList(
              ArrayHelper::map(Course::find()
                      ->all(),
                      'id',
                      'name'
                    ),
              ['prompt' => 'Please select',

           ]);
  ?>

</div>

<div class="col-lg-6">
  <?= $form->field($model, 'second_choice')->dropDownList(
            ArrayHelper::map(Course::find()
                    ->all(),
                    'id',
                    'name'
                  ),
            ['prompt' => 'Please select',

         ]);
  ?>
</div>







    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
