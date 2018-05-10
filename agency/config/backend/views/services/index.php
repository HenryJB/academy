<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Services';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="service-index">
  <h3><?= Html::encode($this->title) ?></h3>
  <!-- Start Page Content -->
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">



                <p>
                    <?= Html::a('Create Service', ['create'], ['class' => 'btn btn-success']) ?>
                </p>

                <?= GridView::widget([
                    'dataProvider' => $dataProvider,
                    'columns' => [
                        ['class' => 'yii\grid\SerialColumn'],
                        'title',
                        'content:ntext',
                        'photo',
                        'date',

                        ['class' => 'yii\grid\ActionColumn'],
                    ],
                      ]); ?>
                    </div>
                </div>
            </div>
        </div>

</div>
