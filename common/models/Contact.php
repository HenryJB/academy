<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "contacts".
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $phone_number
 * @property string $message
 * @property string $status
 * @property string $date
 */
class Contact extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'contacts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'email', 'phone_number', 'message', 'date'], 'required'],
            [['message', 'status'], 'string'],
            [['date'], 'safe'],
            [['name'], 'string', 'max' => 100],
            [['email'], 'string', 'max' => 40],
            [['phone_number'], 'string', 'max' => 14],
            [['email'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'phone_number' => 'Phone Number',
            'message' => 'Message',
            'status' => 'Status',
            'date' => 'Date',
        ];
    }
}
