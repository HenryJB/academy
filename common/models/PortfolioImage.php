<?php

namespace common\models;

use Yii;
use common\models\Portfolio;

/**
 * This is the model class for table "portfolio_images".
 *
 * @property int $id
 * @property int $client_id
 * @property string $photos
 * @property string $date
 */
class PortfolioImage extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'portfolio_images';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['portfolio_id', 'photos', 'date'], 'required'],
            [['portfolio_id'], 'integer'],
            [['date'], 'safe'],
            [['photos'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, gif', 'maxFiles' => 4],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'portfolio_id' => 'Portfolio',
            'photos' => 'Photo',
            'date' => 'Date',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPortfolio()
    {
        return $this->hasOne(Portfolio::className(), ['id' => 'portfolio_id']);
    }



}
