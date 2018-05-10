<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "student_projects".
 *
 * @property int $id
 * @property int $student_id
 * @property string $title
 * @property string $description
 * @property string $attachment
 * @property string $date
 * @property string $url
 * @property string $type
 */
class StudentProject extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'student_projects';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['student_id', 'title', 'description', 'date', 'type'], 'required'],
            [['student_id'], 'integer'],
            [['description', 'type'], 'string'],
            [['date'], 'safe'],
            [['title', 'attachment'], 'string', 'max' => 255],
            [['url'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'student_id' => 'Student ID',
            'title' => 'Title',
            'description' => 'Description',
            'attachment' => 'Attachment',
            'date' => 'Date',
            'url' => 'Url',
            'type' => 'Type',
        ];
    }
}
