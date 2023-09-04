<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;
   
class ActivityControlController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');	
        $this->load->model('ActivityControlModel', 'control');
        
    }

    public function activityControl_get($id = 0) {
        $response = [];
          
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->control->get_activityControl($id);
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

    public function activityControl_post() {
        $response = [];

        $data['activity_id'] = $this->post('activity_id');
        $data['control_name'] = $this->post('control_name');
                
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                if($this->control->find_activityControl($data)){
                    $activity_id = $this->control->insert_activityControl($data);
                       
                if (!empty($activity_id)) {
                    $response['msg'] = 'Activity Control inserted successfully!';
                    $response['id'] = $activity_id;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                } else {
                    $response['msg'] = 'Bad Request!';
                    $response['id'] = $activity_id;
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