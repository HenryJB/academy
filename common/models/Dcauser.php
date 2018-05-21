<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "dcausers".
 *
 * @property int $id
 * @property string $username
 * @property string $password
 * @property string $usertype
 * @property string $authKey
 * @property string $createdAt
 * @property string $updateAt
 */
class Dcauser extends \yii\db\ActiveRecord implements \yii\web\Identityinterface
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'dcausers';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['username', 'password', 'usertype', 'createdAt', 'updateAt'], 'required'],
            [['createdAt', 'updateAt'], 'safe'],
            [['username'], 'string', 'max' => 50],
            [['password'], 'string', 'max' => 32],
            [['usertype'], 'string', 'max' => 100],
            [['username'], 'unique'],
            [['authKey'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'username' => 'Username',
            'password' => 'Password',
            'usertype' => 'Usertype',
            'createdAt' => 'Created At',
            'updateAt' => 'Update At',
        ];
    }


    /**
     * Finds an identity by the given ID.
     *
     * @param string|int $id the ID to be looked for
     * @return IdentityInterface|null the identity object that matches the given ID.
     */
    public static function findIdentity($id)
    {
        return self::findOne($id);
    }


    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new \yii\base\NotSupportedException();
    }

    /**
     * @return int|string current user ID
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string current user auth key
     */
    public function getAuthKey()
    {
        return $this->authKey;
    }

    /**
     * @param string $authKey
     * @return bool if auth key is valid for current user
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        $user = self::find()->where(['username'=>$username])->one();
        if ($user!==null) {
          return new static($user);
        }

        return null;
    }

    public function validatePassword($password)
    {
      return $this->password === $password;
    }

}
