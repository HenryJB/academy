<?php

namespace academy\controllers;
use common\models\Instructor;

class InstructorsController extends \yii\web\Controller
{
  public function actionIndex()
  {
      $instructorsModel = Instructor::find()->all();
      return $this->render('index',['instructors'=>$instructorsModel]);
  }

}
