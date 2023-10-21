<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\SuperUserModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class Super extends BaseController
{
    use ResponseTrait;


    public function register()
    {
        $userModel = new SuperUserModel();

        $username = $this->request->getVar('uname');
        $password = $this->request->getVar('password');

        $rules = [
            'uname' => ['rules' => 'required|is_unique[super_master.uname]'],
            'password' => ['rules' => 'required|min_length[5]|max_length[255]'],
            'confirm_password' => ['label' => 'confirm password', 'rules' => 'matches[password]']
        ];

        if ($this->validate($rules)) {

            $data = [
                'uname' => $this->request->getVar('uname'),
                'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT)
            ];
           $result= $userModel->save($data);

            $key = getenv('JWT_SECRET');
            $iat = time(); // current timestamp value
            $exp = $iat + 3600;

            $payload = [
                "iss" => "Issuer of the JWT",
                "aud" => "Audience that the JWT",
                "sub" => "Subject of the JWT",
                "iat" => $iat,
                //Time the JWT issued at
                "exp" => $exp,
                // Expiration time of token
                "uname" => $userModel->getInsertID(),
            ];

            $token = JWT::encode($payload, $key, 'HS256');




            $response['msg'] = 'Thank you for registering your new account!';
            $response['userid'] = $userModel->getInsertID();
            $response['url'] = base_url();
            $response['type'] = 'master';
            $response['token'] = $token;
            $response['status'] = 200;

            return $this->respond($response, 200);
        } else {
            $response = [
                'errors' => $this->validator->getErrors(),
                'message' => 'Invalid Inputs'
            ];
            return $this->fail($response, 409);

        }



    }

    public function index()
    {
        $userModel = new SuperUserModel();

        $username = $this->request->getVar('uname');
        $password = $this->request->getVar('password');

        $user = $userModel->where('uname', $username)->first();
        // print_r($user);exit;
        if (is_null($user)) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }

        $pwd_verify = password_verify($password, $user['password']);

        if (!$pwd_verify) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }

        $key = getenv('JWT_SECRET');
        $iat = time(); // current timestamp value
        $exp = $iat + 3600;

        $payload = array(
            "iss" => "Issuer of the JWT",
            "aud" => "Audience that the JWT",
            "sub" => "Subject of the JWT",
            "iat" => $iat,
            //Time the JWT issued at
            "exp" => $exp,
            // Expiration time of token
            "uname" => $user['uname'],
        );

        $token = JWT::encode($payload, $key, 'HS256');

        $session = \Config\Services::session();

        $sessionData = array(
            'username' => $user['uname'],
            'userid' => $user['id'],
            'token' => $token,
            'logged_in' => TRUE
        );
    
        $session->set('SuperLoginSession', $sessionData);


        $response['msg'] = 'user login successfully!';
        $response['userid'] = $user['id'];
        $response['url'] = base_url();
        $response['type'] = 'master';
        $response['token'] = $token;
        $response['status'] = 200;

        return $this->respond($response, 200);
    }
}
