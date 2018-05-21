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
 * @property string $accomplishments
 * @property string $country
 * @property string $state_id
 * @property string $dob
 * @property string $photo
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
            [['first_name', 'last_name', 'gender', 'email', 'contact_address', 'occupation', 'year', 'accomplishments', 'country', 'state_id'], 'required'],
            [['contact_address', 'accomplishments'], 'string'],
            [['year', 'dob'], 'safe'],
            [['first_name', 'last_name', 'email', 'facebook', 'instagram', 'twitter'], 'string', 'max' => 100],
            [['password'], 'string', 'max' => 32],
            [['gender'], 'string', 'max' => 4],
              [['email'], 'unique'],
            [['occupation', 'country', 'state_id', 'photo'], 'string', 'max' => 200],
            [['facebook','twitter', 'instagram', 'year', 'country', 'state_id', 'dob',], 'required', 'on'=>'profile-update'],
            ['state_id', 'required', 'when' => function($model) {
                                      return $model->country == 'Nigeria';
          }],
        ];
    }


    public function scenarios()
    {
      $scenarios = parent::scenarios();
      $scenarios['update-profile'] = ['facebook','twitter', 'instagram', 'year', 'country', 'state_id', 'dob',];
      return $scenarios;
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
            'year' => 'Year You Attended DCA',
            'accomplishments' => 'Accomplishments Since DCA',
            'country' => 'Country',
            'state_id' => 'State ',
            'dob' => 'Dob',
            'photo' => 'Photo',
            'facebook' => 'Facebook',
            'instagram' => 'Instagram',
            'twitter' => 'Twitter',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {

            $this->photo->saveAs(Url::to('@academy/web/uploads/alumni/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@academy/web/uploads/alumni/').$this->photo->baseName.'.'.$this->photo->extension, 413, 531)
                ->resize(new Box(413, 531))
                ->save(Url::to('@academy/web/uploads/alumni/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
