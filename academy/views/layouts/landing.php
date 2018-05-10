<?php

/* @var $this \yii\web\View */
/* @var $content string */
use yii\helpers\Html;
use academy\assets\HomeAsset;

HomeAsset::register($this);
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language; ?>">
<head>
    <meta charset="<?= Yii::$app->charset; ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags(); ?>
    <title><?= Html::encode($this->title); ?></title>
    <?php $this->head(); ?>
</head>
<body>
  <!-- Modal -->
  <div class="modal fade" id="courseModal" tabindex="-1" role="dialog" aria-labelledby="courseModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
              <div class="modal-header">

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">

              </div>

          </div>
      </div>
  </div>

  <div class="loading">
      <div class="text-center middle">
          <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  </div>


<?php $this->beginBody(); ?>


    <?= $content; ?>

<?php $this->endBody(); ?>
</body>
</html>
<?php $this->endPage(); ?>
