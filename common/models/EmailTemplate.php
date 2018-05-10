<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "email_template".
 *
 * @property int $id
 * @property string $type
 * @property string $subject
 * @property string $body
 */
class EmailTemplate extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'email_template';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['body'], 'string'],
            [['type', 'subject'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type' => 'Type',
            'subject' => 'Subject',
            'body' => 'Body',
        ];
    }
}
