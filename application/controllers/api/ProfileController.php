<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ProfileController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('ProfileModel', 'profile');
        
    }

    public function profile_get($id = 0) {

           
        try {
           
                //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->profile->get_profile($id);
                    if (!empty($data)) {
                        $response['data'] = $data;
                        $response['msg'] = 'All Data Fetch successfully!';
                        $response['status'] = 200;
                        $this->response($response, REST_Controller::HTTP_OK);
                    } else {
                        $response['msg'] = 'Data not Found!';
                        $response['status'] = 404;
                        $this->response($response, REST_Controller::HTTP_OK);
                    }
                }else {
                $this->response($decodedToken);
            }
            }else {
                $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
            }

            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function profile_post() {
        
        $data['role_id'] = $this->post('role_id');
        $data['profile'] = $this->post('profile');
        $data['is_active'] = ($this->post('is_active') == 'on' || $this->post('is_active') == 1) ? 1 : 0;

        $id = $this->post('id');
        
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                
            if (empty($id)) {
                if($this->profile->find_profile($data['profile'])){
                   $profile_id = $this->profile->insert_profile($data);

            if (!empty($profile_id)) {
                $restData = $this->profile->get_profile($profile_id);
                $response['msg'] = 'Profile created successfully!';
                $response['data'] = $restData;
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                $response['msg'] = 'Bad Request!';
                $response['id'] = $id;
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            } 
                }else{
                    $response['msg'] = 'Duplicate Entry!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_OK);
                }
                
        } else {
            $result=$this->profile->get_profile($id);
            if (!empty($result)) {
                if($this->profile->find_profile($data['profile']) || $result['profile']==$data['profile']){
                    
                $status = $this->profile->update_profile($id, $data);
                if ($status) {
                    $restData = $this->profile->get_profile($id);
                    $response['msg'] = 'Profile updated successfully!';
                    $response['data'] = $restData;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                }
            }else{
                $response['msg'] = 'Duplicate Entry!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_OK);
            }
            } else {
                $response['msg'] = 'Data not found!';
                $response['id'] = $id;
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_OK);
            }
        }

            }else {
            $this->response($decodedToken);
        }
        }else {
            $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        }
        
    }

    public function profileByRole_get($roleid = 0) {
        
        try {
        
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->profile->get_profileByRole($roleid);
            if (!empty($data)) {
                $response['data'] = $data;
                $response['msg'] = 'All Data Fetch successfully!';
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                $response['msg'] = 'Data not Found!';
                $response['status'] = 404;
                $this->response($response, REST_Controller::HTTP_OK);
            }
                }else {
                $this->response($decodedToken);
            }
            }else {
                $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
            }

            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
}