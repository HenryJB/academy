<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\LoginAsset;
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
// use yii\bootstrap\Nav;
// use yii\bootstrap\NavBar;
// use yii\widgets\Breadcrumbs;
// use common\widgets\Alert;

LoginAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:** -->
    <!--[if lt IE 9]>
    <script src="https:**oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https:**oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body class="fix-header fix-sidebar">
<?php $this->beginBody() ?>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				  <?php $form = ActiveForm::begin(['id' => 'login-form', 'class'=>'login100-form validate-form']); ?>
				<form class="">
					<span class="login100-form-title p-b-26">
						Admin
					</span>
					<span class="login100-form-title p-b-48">
						<!-- <i class="zmdi zmdi-font"></i> -->
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						 <?= $form->field($model, 'username')->textInput(['autofocus' => true, 'class'=>'input100', 'autocomplete'=>'off'])
						 ->label(false) ?>

						<span class="focus-input100" data-placeholder=""></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<?= $form->field($model, 'password')->passwordInput(['class'=>'input100', 'autocomplete'=>'off'])
							 ->label(false) ?>
						<span class="focus-input100" data-placeholder=""></span>
					</div>

					<div class="wrap-input100" >
						<?= $form->field($model, 'rememberMe')->checkbox() ?>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>

					<!-- <div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>

						<a class="txt2" href="#">
							Sign Up
						</a>
					</div> -->
				<?php ActiveForm::end(); ?>
			</div>
		</div>
	</div>


	<div id="dropDownSelect1"></div>

	<?php $this->endBody() ?>
	</body>
	</html>
	<?php $this->endPage() ?>
