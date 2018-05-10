<?php

namespace common\models;

use Yii;
use common\models\PortfolioImage;
use common\models\Client;
/**
 * This is the model class for table "portfolios".
 *
 * @property int $id
 * @property string $title
 * @property string $subtitle
 * @property string $description
 * @property int $client_id
 * @property string $year
 * @property string $websiteurl
 * @property string $date
 */
class Portfolio extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'portfolios';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'description', 'client_id', 'date'], 'required'],
            [['description'], 'string'],
            [['client_id'], 'integer'],
            [['year', 'date'], 'safe'],
            [['title'], 'string', 'max' => 200],
            [['subtitle', 'websiteurl'], 'string', 'max' => 255],
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
            'subtitle' => 'Subtitle',
            'description' => 'Description',
            'client_id' => 'Client ',
            'year' => 'Year',
            'websiteurl' => 'Websiteurl',
            'date' => 'Date',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPortfolioImages()
    {
        return $this->hasMany(PortfolioImage::className(), ['portfolio_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getClient()
    {
        return $this->hasOne(Client::className(), ['id' => 'client_id']);
    }
}
