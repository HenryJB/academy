<?php

namespace common\models;

use Yii;
use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "blogs".
 *
 * @property int $id
 * @property string $title
 * @property string $post
 * @property string $photo
 * @property string $author
 * @property string $date
 */
class Blog extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'blogs';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'post', 'author', 'date'], 'required'],
            [['post'], 'string'],
            [['date'], 'safe'],
            [['title', 'author'], 'string', 'max' => 200],
            [['photo'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'mimeTypes' => 'image/jpeg, image/png'],
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
            'post' => 'Post',
            'photo' => 'Photo',
            'author' => 'Author',
            'date' => 'Date',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            //$imageName = Yii::$app->security->generateRandomString();
            $this->photo->saveAs(Url::to('@agency/web/uploads/posts/').$this->photo->baseName.'.'.$this->photo->extension);
            ImageBox::thumbnail(Url::to('@agency/web/uploads/posts/').$this->photo->baseName.'.'.$this->photo->extension, 640, 350)
                ->resize(new Box(640, 350))
                ->save(Url::to('@agency/web/uploads/posts/thumbs/').$this->photo->baseName.'.'.$this->photo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }

    public function resizeImage($imageDirectory, $thumbnailDirectory, $image)
    {
        ImageBox::thumbnail($imageDirectory.$image, 640, 350)
            ->resize(new Box(640, 350))
            ->save($thumbnailDirectory.$image,
                ['quality' => 80]);
    }
}
