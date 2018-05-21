<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use common\models\AfricanState;

/* @var $this yii\web\View */
/* @var $model common\models\Alumni */
/* @var $form yii\widgets\ActiveForm */
?>


<section class="team section-padding bg-white" data-scroll-index="4" id="alumni-section">
    <div class="container">
      <!-- MultiStep Form -->
      <div class="col-lg-9 overlay-bg">
        <h3>Please update the below to complete your Profile</h3>
        <?php $form = ActiveForm::begin(['id'=>'student-form']); ?>
          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'first_name')->textInput(['maxlength' => true]) ?>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'last_name')->textInput(['maxlength' => true]) ?>
          </div>

        <div class="col-xs-12 col-sm-6 col-lg-6">
        <?= $form->field($model, 'email')->textInput(['type' => 'email']) ?>
      </div>

      <div class="col-xs-12 col-sm-6 col-lg-6">

          <?= $form->field($model, 'gender')->dropDownList([ 'M' => 'M', 'F' => 'F', '' => '', ], ['prompt' => '']) ?>
     </div>
      <div class="col-lg-12 col-md-12">
        <?= $form->field($model, 'contact_address')->textarea(['rows' => 6]) ?>
      </div>

      <div class="col-xs-12 col-sm-6 col-lg-6">
        <?= $form->field($model, 'country')->dropDownList(
                  ArrayHelper::map(AfricanState::find()

                          ->groupBy('country')
                          ->all(),
                          'country',
                          'country'
                        ),
                  ['prompt' => 'Please select',
                   'onchange'=>'
                         $.post( "'.Yii::$app->urlManager->createUrl('students/related-states?id=').'"+$(this).val(), function( data ) {
                           $( "select#student-state_id" ).html(data);
                         });

                   ']);
        ?>
      </div>


          <div class="col-xs-12 col-sm-6 col-lg-6">

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

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'occupation')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'year')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-12 col-lg-12">
          <?= $form->field($model, 'accomplishments')->textarea(['rows' => 6]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'facebook')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'instagram')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
          <?= $form->field($model, 'twitter')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'dob')->textInput(['maxlength' => true]) ?>

          </div>

          <div class="col-xs-12 col-sm-6 col-lg-6">
            <?= $form->field($model, 'password')->passwordInput(['maxlength' => true]) ?>

          </div>


          <div class="form-group col-xs-12 col-sm-6 col-lg-12">
              <?= Html::submitButton('Submit', ['class' => 'btn btn-warning']) ?>
          </div>



          <?php ActiveForm::end(); ?>

      </div>
<!-- /.MultiStep Form -->
</div>
</section>
