<?php

namespace academy\controllers;

use common\models\Course;

class CoursesController extends \yii\web\Controller
{
    public function actionIndex()
    {
        $coursesModel = Course::find()->all();
        return $this->render('index',['courses'=>$coursesModel]);
    }

    public function actionCourseDetails($id)
    {
      $course = Course::find()->where(['id'=>$id])->one();
      return $this->renderPartial('details',['course'=>$course]);
    }

}
