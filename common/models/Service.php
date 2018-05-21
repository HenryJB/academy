<?php

namespace common\models;

use yii\helpers\Url;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;

/**
 * This is the model class for table "services".
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property string $photo
 * @property string $date
 */
class Service extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'services';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'content', 'date'], 'required'],
            [['content'], 'string'],
            [['date'], 'safe'],
            [['title'], 'string', 'max' => 255],
            [['photo'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg, gif', 'mimeTypes' => 'image/jpeg, image/png'],
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
            'content' => 'Content',
            'photo' => 'Photo',
            'date' => 'Date',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $this->photo->saveAs(Url::to('@agency/web/uploads/services/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@agency/web/uploads/services/').$this->photo->baseName.'.'.$this->photo->extension, 640, 350)
                ->resize(new Box(640, 350))
                ->save(Url::to('@agency/web/uploads/services/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
