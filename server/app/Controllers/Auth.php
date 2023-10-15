<?php

namespace App\Controllers;
use CodeIgniter\API\ResponseTrait;
use App\Controllers\BaseController;
use App\Models\UserModel;
use Firebase\JWT\JWT;
class Auth extends BaseController
{
    use ResponseTrait;
    protected $mdl;
    public function __construct() {
        $this->mdl = new UserModel();
    }
    public function register()
    {
        helper(['form']);
        
        $data = [
            'email' => $this->request->getVar('email'),
            'password' => password_hash($this->request->getVar('password'), PASSWORD_BCRYPT),
            'name'     => $this->request->getVar('name'),
            'contact'     => $this->request->getVar('contact'),
        ];

        if (!$this->mdl->save($data)) {
            return $this->fail($this->mdl->errors());
        }

        $response = [
            'status_code' => 201,
            'messege' => 'success register, Welcome To YOO booking now 😁',
            'user'  => $data
        ];
        

        return $this->respond($response);
    }

    public function login() {
        helper(['form']);
        
       $email =  $this->request->getVar('email');
       $password =  $this->request->getVar('password');

        $user = $this->mdl->where('email', $email)->first();
        if (!$user) {
            return $this->failNotFound('email not found');
        }
            
        $passwordVerify = password_verify($password, $user['password']);

        if (!$passwordVerify) {
            return $this->fail('Invalid password', 401);
        }

        $key = getenv('JWT_SECRET_KEY');
        $payload = [
            'iat' => time(), 
            'exp' => time() + 60 * 60,
            'uid' => $user['id'], 
            'email' => $user['email'],
            'name' => $user['name'],
            'contact' => $user['contact']
        ];

        $token = JWT::encode($payload, $key, 'HS256');

       
        return $this->respond(['jwt_token' => $token]);
        

    }
        


}