<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ProfileTabController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('ProfileTabModel', 'tab');
    }

    public function profile_tab_get($id = 0) {
       
       
        try {
          
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->tab->get_profile_tab($id,1);
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

    public function profile_tab_post() {
        
        $data['tab_id'] = $this->post('tab_id');
        $data['profile_id'] = $this->post('profile_id');
        
        $id = $this->post('id');
        
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                if (empty($id)) {
                    if($this->tab->find_profile_tab($data['profile_id'],$data['tab_id'])){
                       $ptab_id = $this->tab->insert_profile_tab($data);
    
                if (!empty($ptab_id)) {
                    $restData = $this->tab->get_profile_tab($ptab_id,2);
                    $response['msg'] = 'Profile Tab Add successfully!';
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
                        $response['msg'] = 'Profile updated successfully!';
                        $response['id'] = $id;
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
    public function profile_tab_delete_get($id){
        
        try {
        
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->tab->delete_profile_tab($id);
            if (!empty($data)) {
                $response['data'] = $data;
                $response['msg'] = 'Profile Tab Deleted successfully!';
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