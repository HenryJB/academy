<?php
<<<<<<< HEAD
=======

>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
namespace common\models;

use Yii;
use yii\base\Model;

/**
<<<<<<< HEAD
 * Login form
=======
 * LoginForm is the model behind the login form.
 *
 * @property User|null $user This property is read-only.
 *
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
 */
class LoginForm extends Model
{
    public $username;
    public $password;
    public $rememberMe = true;

<<<<<<< HEAD
    private $_user;


    /**
     * {@inheritdoc}
=======
    private $_user = false;


    /**
     * @return array the validation rules.
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
     */
    public function rules()
    {
        return [
            // username and password are both required
            [['username', 'password'], 'required'],
            // rememberMe must be a boolean value
            ['rememberMe', 'boolean'],
            // password is validated by validatePassword()
            ['password', 'validatePassword'],
        ];
    }

    /**
     * Validates the password.
     * This method serves as the inline validation for password.
     *
     * @param string $attribute the attribute currently being validated
     * @param array $params the additional name-value pairs given in the rule
     */
    public function validatePassword($attribute, $params)
    {
        if (!$this->hasErrors()) {
            $user = $this->getUser();
<<<<<<< HEAD
=======

>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
            if (!$user || !$user->validatePassword($this->password)) {
                $this->addError($attribute, 'Incorrect username or password.');
            }
        }
    }

    /**
     * Logs in a user using the provided username and password.
<<<<<<< HEAD
     *
=======
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
     * @return bool whether the user is logged in successfully
     */
    public function login()
    {
        if ($this->validate()) {
<<<<<<< HEAD
            return Yii::$app->user->login($this->getUser(), $this->rememberMe ? 3600 * 24 * 30 : 0);
        }
        
=======
            return Yii::$app->user->login($this->getUser(), $this->rememberMe ? 3600*24*30 : 0);
        }
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
        return false;
    }

    /**
     * Finds user by [[username]]
     *
<<<<<<< HEAD
     * @return User|null
     */
    protected function getUser()
    {
        if ($this->_user === null) {
            $this->_user = User::findByUsername($this->username);
=======
     * @return Dcauser|null
     */
    public function getUser()
    {
        if ($this->_user === false) {
            $this->_user = Dcauser::findByUsername($this->username);
>>>>>>> e016ecb9c3d9bdd8e623c96440be9a414f26af86
        }

        return $this->_user;
    }
}
