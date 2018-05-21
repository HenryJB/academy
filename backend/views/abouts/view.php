<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\About */

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Abouts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="about-view">

  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">

              <h3><?= Html::encode($this->title) ?></h3>

              <p>
                  <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
                  <?= Html::a('Delete', ['delete', 'id' => $model->id], [
                      'class' => 'btn btn-danger',
                      'data' => [
                          'confirm' => 'Are you sure you want to delete this item?',
                          'method' => 'post',
                      ],
                  ]) ?>
              </p>

              <?= DetailView::widget([
                  'model' => $model,
                  'attributes' => [
                      'title',
                      'body:ntext',
                      'photo',
                      'date',
                  ],
              ]) ?>

                </div>
            </div>
        </div>
  </div>
