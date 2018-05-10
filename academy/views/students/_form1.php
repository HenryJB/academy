<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use common\models\AfricanState;
use common\models\Course;

/* @var $this yii\web\View */
/* @var $model common\models\Student */
/* @var $form yii\widgets\ActiveForm */
use academy\assets\RegisterAsset;

RegisterAsset::register($this);
?>

<div class="student-form">

    <?php $form = ActiveForm::begin(['id'=>'']); ?>
    <!-- progressbar -->
    <ul id="progressbar">
      <li class="active">Personal Info</li>
      <li>DCA Program Info</li>
      <li>Miscellaneous </li>
    </ul>
    <!-- fieldsets -->
    <fieldset>
      <h2 class="fs-title">Personal Info</h2>
      <h3 class="fs-subtitle">The privacy of your personal data is important to us</h3>
      <div class="col-lg-6">
        <?= $form->field($model, 'first_name')->textInput(['maxlength' => true]) ?>
      </div>
      <div class="col-lg-6">
        <?= $form->field($model, 'last_name')->textInput(['maxlength' => true]) ?>
      </div>
    <div class="col-lg-6">
      <div class="col-lg-6">
        <?= $form->field($model, 'gender')->dropDownList([ 'M' => 'M', 'F' => 'F', '' => '', ], ['prompt' => '']) ?>
      </div>

      <div class="col-lg-6">
        <?= $form->field($model, 'date_of_birth')->textInput(['type'=>'date']) ?>
      </div>

    </div>
    <div class="col-lg-6">
    <?= $form->field($model, 'email_address')->textInput(['type' => 'email']) ?>
  </div>
  <div class="col-lg-12">
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
                       $.post( "'.Yii::$app->urlManager->createUrl('students/related-states?id=').'"+$(this).val(), function( data ) {
                         $( "select#student-state_id" ).html(data);
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


<div class="col-lg-12">
  <?= $form->field($model, 'occupation')->textInput(['maxlength' => true]) ?>
</div>

  <input type="button" name="next" class="next action-button" value="Next" />
</fieldset>

<fieldset>
  <h2 class="fs-title">DCA Program Info</h2>
  <h3 class="fs-subtitle"></h3>

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
<div class="col-lg-12">

  <?= $form->field($model, 'reason')->textarea(['rows' => 6]) ?>
</div>

<div class="col-lg-12">
  <?= $form->field($model, 'propose_project')->textarea(['rows' => 6]) ?>
</div>
  <input type="button" name="previous" class="previous action-button" value="Previous" />
  <input type="button" name="next" class="next action-button" value="Next" />
</fieldset>

<fieldset>
  <h2 class="fs-title">Miscellaneous</h2>
  <h3 class="fs-subtitle"></h3>

<div class="col-lg-6">
    <?= $form->field($model, 'information_source')->dropDownList([ 'Advertisements' => 'Advertisements', 'Blog' => 'Blog', 'Bronchure' => 'Bronchure', 'Google' => 'Google', 'Facebook' => 'Facebook', 'Instagram' => 'Instagram', 'DCA Alumni' => 'DCA Alumni', 'Word of Mouth' => 'Word of Mouth', 'TV Commercials' => 'TV Commercials', 'Linkedin' => 'Linkedin', 'Twitter' => 'Twitter', 'Youtube' => 'Youtube', 'Others' => 'Others', ], ['prompt' => '']) ?>
</div>

<div class="col-lg-6">
  <div class="col-lg-6">
      <?= $form->field($model, 'sponsor_aid')->checkbox() ?>
  </div>
  <div class="col-lg-6">
      <?= $form->field($model, 'terms_condition')->checkbox() ?>
  </div>

</div>

  <input type="button" name="previous" class="previous action-button" value="Previous" />
  <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>



</fieldset>
<?php ActiveForm::end(); ?>

</div>
