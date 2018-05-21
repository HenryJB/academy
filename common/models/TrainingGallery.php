<?php

namespace common\models;

use Yii;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "training_galleries".
 *
 * @property int $id
 * @property string $photo
 * @property string $description
 * @property string $year
 */
class TrainingGallery extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'training_galleries';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['photo', 'description', 'year'], 'required'],
            [['description'], 'string'],
            [['year'], 'safe'],
            [['photo'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'mimeTypes' => 'image/*'],
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
            'year' => 'Year',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {

            $this->photo->saveAs(Url::to('@academy/web/uploads/training-gallery/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@academy/web/uploads/training-gallery/').$this->photo->baseName.'.'.$this->photo->extension, 413, 531)
                ->resize(new Box(413, 531))
                ->save(Url::to('@academy/web/uploads/training-gallery/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
