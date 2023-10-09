<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ProfileActivityControlPermissionController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('ProfileActivityControlPermissionModel', 'permission');
        
    }

    public function profileActivityPermission_get($id = 0) {
        $response = [];

          
        try {
          
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->permission->get_profile_activity_permission($id);
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

    public function profileActivityPermission_post() {
        
        $profile_id= $this->input->post('profile_id');
        $activity_id= $this->input->post('activity_id');
        $permissionArr = $this->input->post('permissionArr');

        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                $msg="";
            $permissionData= json_decode($permissionArr);
           if($this->permission->find_permission($profile_id,$activity_id)){
               $msg="Permission Inserted successfully!";
           }else{
               $msg="Permission Updated successfully!";
           }
            //delete permission
           $this->permission->deletePermission($profile_id,$activity_id); 
           $pacp_id=$this->permission->insert_profile_activity_permission($permissionData);     
                
           if (!empty($pacp_id)) {
            $response['msg'] = $msg;
            $response['id'] = $pacp_id;
            $response['status'] = 200;
            $this->response($response, REST_Controller::HTTP_OK);
        } else {
            $response['msg'] = 'Bad Request!';
            $response['id'] = $pacp_id;
            $response['status'] = 400;
            $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
        }
        
            }else {
            $this->response($decodedToken);
        }
        }else {
            $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        }
        
    }

    public function updateActivityControl_post(){
        $data['control_name'] = $this->post('c_name');
        $id = $this->post('control_id');

        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                $result=$this->control->get_activityControlById($id);
            if (!empty($result)) {
                 $data['activity_id']=$result['activity_id'];
                    if($this->control->find_activityControl($data)){
                $status = $this->control->update_activity_control($id,$data);
                if ($status) {
                    $response['msg'] = 'Activity Control updated successfully!';
                    $response['id'] = $id;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                }
            }else if($data['control_name']==$result['control_name']){
                $response['msg'] = 'Already Present';
                    $response['status'] = 400;
                    $this->response($response, REST_Controller::HTTP_OK);
            }else{
                $response['msg'] = 'Duplicate Entry';
                    $response['status'] = 400;
                    $this->response($response, REST_Controller::HTTP_OK);
            }
            
            } else {
                $response['msg'] = 'Data not found!';
                $response['id'] = $id;
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
    
}