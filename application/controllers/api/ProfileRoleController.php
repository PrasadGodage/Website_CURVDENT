<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ProfileRoleController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('ProfileRoleModel', 'role');
        
    }

    public function profile_role_get($id = 0) {
        
        try {
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    
            $data = $this->role->get_profile_role($id);
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

    public function profile_role_post() {
        
        $data['role_id'] = $this->post('role_id1');
        $data['profile_id'] = $this->post('profile_id');
        

        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                    
                if($this->role->find_profile_role($data['profile_id'],$data['role_id'])){
                    $prole_id = $this->role->insert_profile_role($data);
 
             if (!empty($prole_id)) {
                 $response['msg'] = 'Profile Role Add successfully!';
                 $response['id'] = $prole_id;
                 $response['status'] = 200;
                 $this->response($response, REST_Controller::HTTP_OK);
             } else {
                 $response['msg'] = 'Bad Request!';
                 $response['status'] = 400;
                 $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
             } 
                 }else{
                     $response['msg'] = 'Duplicate Entry!';
                 $response['status'] = 400;
                 $this->response($response, REST_Controller::HTTP_OK);
                 }
            }else {
            $this->response($decodedToken);
        }
        }else {
            $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        }    
              
    }
    public function profile_role_delete_get($id){
       
        try {
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    
            $data = $this->role->delete_profile_role($id);
            if (!empty($data)) {
                $response['data'] = $data;
                $response['msg'] = 'Profile Role Deleted successfully!';
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