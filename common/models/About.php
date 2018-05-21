<?php

namespace common\models;

use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "abouts".
 *
 * @property int $id
 * @property string $title
 * @property string $body
 * @property string $photo
 * @property string $date
 */
class About extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'abouts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'body', 'photo', 'date'], 'required'],
            [['body'], 'string'],
            [['date'], 'safe'],
            [['title'], 'string', 'max' => 200],
            [['photo'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif,mp4, mp3', 'mimeTypes' => 'image/jpeg, image/png, 	video/mp4, audio/mpeg'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'body' => 'Body',
            'photo' => 'Photo',
            'date' => 'Date',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $this->photo->saveAs(Url::to('@agency/web/uploads/abouts/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@agency/web/uploads/abouts/').$this->photo->baseName.'.'.$this->photo->extension, 640, 350)
                ->resize(new Box(640, 350))
                ->save(Url::to('@agency/web/uploads/abouts/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
