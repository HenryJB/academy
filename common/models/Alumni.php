<?php

namespace common\models;

use Yii;

use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "alumni".
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $password
 * @property string $gender
 * @property string $email
 * @property string $contact_address
 * @property string $occupation
 * @property string $year
 * @property string $country
 * @property string $state_id
 * @property string $dob
 * @property string $facebook
 * @property string $instagram
 * @property string $twitter
 */
class Alumni extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'alumni';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['first_name', 'last_name', 'password', 'gender', 'email', 'contact_address', 'occupation', 'year',
                'country', 'state_id', 'dob', 'facebook', 'instagram', 'twitter','photo'], 'required'],
            [['first_name', 'last_name', 'gender'], 'string', 'max' => 100],
            [['password'], 'string', 'max' => 250],
            [['email', 'contact_address', 'occupation', 'year', 'country', 'state_id', 'dob', 'facebook', 'instagram', 'twitter'], 'string', 'max' => 200],
            [['photo'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'maxFiles' => 1],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'password' => 'Password',
            'gender' => 'Gender',
            'email' => 'Email',
            'contact_address' => 'Contact Address',
            'occupation' => 'Occupation',
            'year' => 'Year',
            'country' => 'Country',
            'state_id' => 'State ID',
            'dob' => 'Dob',
            'facebook' => 'Facebook',
            'instagram' => 'Instagram',
            'twitter' => 'Twitter',
            'photo' => 'Photo'
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $this->photo->saveAs(Url::to('@backend/web/uploads/alumni/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@backend/web/uploads/alumni/').$this->photo->baseName.'.'.$this->photo->extension, 640, 350)
                ->resize(new Box(640, 350))
                ->save(Url::to('@backend/web/uploads/alumni/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                    ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }


}
