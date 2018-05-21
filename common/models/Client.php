<?php

namespace common\models;

use yii\imagine\Image as ImageBox;
use Imagine\Image\Box;
use yii\helpers\Url;

/**
 * This is the model class for table "clients".
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $logo
 * @property string $date
 */
class Client extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'clients';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'logo', 'date'], 'required'],
            [['date'], 'safe'],
            [['logo'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'mimeTypes' => 'image/jpeg, image/png'],
            [['description', 'name'], 'string', 'max' => 200],
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
            'description' => 'Description',
            'logo' => 'Logo',
            'date' => 'Date',
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $this->logo->saveAs(Url::to('@agency/web/uploads/clients/').$this->logo->baseName.'.'.$this->logo->extension);
            ImageBox::thumbnail(Url::to('@agency/web/uploads/clients/').$this->logo->baseName.'.'.$this->logo->extension, 640, 350)
                ->resize(new Box(640, 350))
                ->save(Url::to('@agency/web/uploads/clients/thumbs/').$this->logo->baseName.'.'.$this->logo->extension,
                        ['quality' => 80]);

            return true;
        } else {
            return false;
        }
    }
}
