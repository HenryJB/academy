<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "ceo_photos".
 *
 * @property int $id
 * @property string $photo
 * @property string $description
 */
class CeoPhoto extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'ceo_photos';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['photo'], 'required'],
            [['description'], 'string'],
            [['photos'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'maxFiles' => 4],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'photo' => 'Photo',
            'description' => 'Description',
        ];
    }
}
