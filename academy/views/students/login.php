<?php
  use yii\helpers\Html;
  use yii\bootstrap\ActiveForm;


?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login V3</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>

	<?= Html::cssFIle('@web/css/login/vendor/bootstrap/css/bootstrap.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/fonts/iconic/css/material-design-iconic-font.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/fonts/iconic/css/material-design-iconic-font.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/animate/animate.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/css-hamburgers/hamburgers.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/animsition/css/animsition.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/select2/select2.min.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/daterangepicker/daterangepicker.css'); ?>

	<?= Html::cssFIle('@web/css/login/vendor/daterangepicker/daterangepicker.css'); ?>

	<?= Html::cssFIle('@web/css/login/util.css'); ?>

	<?= Html::cssFIle('@web/css/login/main.css'); ?>

</head>
<body>

	<div class="limiter">
		<div class="container-login100" style='background-image: "<?= Html::img('@web/images/bg-01.jpg'); ?>"'>
			<div class="wrap-login100">

					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

          <?php $form = ActiveForm::begin(['id' => 'login-form',]); ?>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<?= $form->field($model, 'username')->textInput(['autofocus' => true, 'placeholder'=>'Email address','class'=>'input100'])->label(false) ?>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						  <?= $form->field($model, 'password')->passwordInput([ 'placeholder'=>'Password', 'class'=>'input100'])->label(false) ?>
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<!-- <div class="contact100-form-checkbox">



          <div class="wrap-input100 validate-input" data-validate = "Enter username">

            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">

            <span class="focus-input100" data-placeholder="&#xf191;"></span>
          </div>


					<div class="contact100-form-checkbox">

						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>

					</div> -->
          <div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>


					</div>
		<?php ActiveForm::end(); ?>

			</div>
		</div>
	</div>


	<div id="dropDownSelect1"></div>


<?= Html::jsFIle('@web/js/jquery-3.0.0.min.js'); ?>
<?= Html::jsFIle('@web/js/popper.min.js'); ?>
<?= Html::jsFIle('@web/js/bootstrap.min.js'); ?>
<?= Html::jsFIle('@web/js/login/main.js'); ?>

</body>
</html>
