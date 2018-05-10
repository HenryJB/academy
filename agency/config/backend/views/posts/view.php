<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Blog */

$this->title = $model->title;
$this->params['breadcrumbs'][] = ['label' => 'Blogs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
              <div class="blog-view">

                <h3><?= Html::encode($this->title); ?></h3>

                <p>
                    <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']); ?>
                    <?= Html::a('Delete', ['delete', 'id' => $model->id], [
                        'class' => 'btn btn-danger',
                        'data' => [
                            'confirm' => 'Are you sure you want to delete this item?',
                            'method' => 'post',
                        ],
                    ]); ?>
                </p>

                <?= DetailView::widget([
                    'model' => $model,
                    'attributes' => [
                        'title',
                        'post:ntext',
                        'author',
                        'date',
                        [
                         'attribute' => 'photo',
                         'format' => 'raw',
                         'value' => function ($model) {
                             if ($model->photo != '') {
                                 return Html::img("@agency/web/uploads/posts/thumbs/$model->photo", ['width' => '50px', 'height' => 'auto']);
                             }
                         },
                         ],
                    ],
                ]); ?>
              </div>
            </div>
          </div>
      </div>

</div>
