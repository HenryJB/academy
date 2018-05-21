<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Clients';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="client-index">

  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">

                  <h1><?= Html::encode($this->title) ?></h1>

                  <p>
                      <?= Html::a('Create Client', ['create'], ['class' => 'btn btn-success']) ?>
                  </p>

                  <?= GridView::widget([
                      'dataProvider' => $dataProvider,
                      'columns' => [
                          ['class' => 'yii\grid\SerialColumn'],

                          'name',
                          'description',
                          'logo',
                          'date',

                          ['class' => 'yii\grid\ActionColumn'],
                      ],
                  ]); ?>

                </div>
            </div>
          </div>
      </div>
</div>
