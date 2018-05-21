<?php

namespace common\models;

use Yii;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "students".
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $gender
 * @property string $email_address
 * @property string $contact_address
 * @property string $occupation
 * @property string $photo
 * @property string $facebook_id
 * @property string $twitter_handle
 * @property string $instagram_handle
 * @property string $year
 * @property string $payment_status
 * @property string $approval_status
 * @property string $country
 * @property int $state_id
 * @property string $date_of_birth
 * @property int $first_choice
 * @property int $second_choice
 * @property string $reason
 * @property string $propose_project
 * @property string $information_source
 * @property int $sponsor_aid
 * @property int $sponsorship_status
 * @property int $terms_condition
 * @property string $date_registered
 */
class Student extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'students';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['first_name', 'last_name', 'gender', 'email_address', 'contact_address', 'country','first_choice','terms_condition','date_registered'], 'required'],
            [['gender', 'contact_address',  'occupation', 'facebook_id','twitter_handle', 'instagram_handle', 'payment_status',
            'approval_status', 'reason', 'propose_project','information_source'], 'string'],
            [['year', 'date_of_birth', 'date_registered'], 'safe'],
            [['state_id', 'first_choice', 'second_choice', 'sponsor_aid', 'sponsorship_status', 'terms_condition'], 'integer'],
            [['first_name', 'last_name'], 'string', 'max' => 200],
            [['email_address'], 'string', 'max' => 100],
            [['country'], 'string', 'max' => 150],
            [['email_address'], 'unique'],
            [['terms_condition'],'required', 'requiredValue' => 1, 'message' => 'Please accept the condition by checking the box'],
            [['photo'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg, gif', 'mimeTypes' => 'image/jpeg, image/png'],
            [['occupation','facebook_id','twitter_handle', 'instagram_handle', 'year', 'country', 'state_id', 'date_of_birth', 'first_choice',
            'reason', 'propose_project','information_source', 'terms_condition'], 'required', 'on'=>'update-profile'],
            ['state_id', 'required', 'when' => function($model) {
                                      return $model->country == 'Nigeria';
          }],

        ];
    }

    public function scenarios()
    {
      $scenarios = parent::scenarios();
      $scenarios['update-profile'] = ['occupation','facebook_id','twitter_handle', 'instagram_handle', 'year', 'country', 'state_id', 'date_of_birth', 'first_choice',
      'reason', 'propose_project','information_source'];
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
            'gender' => 'Gender',
            'email_address' => 'Email Address',
            'contact_address' => 'Contact Address',
            'occupation' => 'Occupation',
            'photo' => 'Photo',
            'facebook_id' => 'Facebook ID',
            'twitter_handle' => 'Twitter',
            'instagram_handle' => 'Instagram',
            'year' => 'Year',
            'payment_status' => 'Payment Status',
            'approval_status' => 'Approval Status',
            'country' => 'Country',
            'state_id' => 'State',
            'date_of_birth' => 'Date Of Birth',
            'first_choice' => 'Training Course',
            'second_choice' => 'Second Choice',
            'reason' => 'Why DCA',
            'propose_project' => 'What project will you do after DCA',
            'information_source' => 'How did you hear about us',
            'sponsor_aid' => 'Sponsor Aid',
            'sponsorship_status' => 'Sponsorship Status',
            'terms_condition' => 'Terms Condition',
            'date_registered' => 'Date Registered',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {

            $this->photo->saveAs(Url::to('@academy/web/uploads/students/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@academy/web/uploads/students/').$this->photo->baseName.'.'.$this->photo->extension, 413, 531)
                ->resize(new Box(413, 531))
                ->save(Url::to('@academy/web/uploads/students/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
