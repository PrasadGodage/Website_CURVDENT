<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;
class ActivityController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('ActivityModel', 'tab');
        
    }

    public function activity_get($id = 0) {
        $response = [];
   
        try {
           //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->tab->get_activity($id);
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

    public function activity_post() {
        $response = [];
        $data['tab_id'] = $this->post('tab_id');
        $data['activity_title'] = $this->post('activity_title');
        $data['url'] = $this->post('url');
        $data['icon_id'] = $this->post('icon_id');
        $data['is_active'] = ($this->post('is_active') == 'on' || $this->post('is_active') == 1) ? 1 : 0;

        $id = $this->post('id');
        
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                
            if (empty($id)) {
                if($this->tab->find_activityUrl($data['url'])){
                   $activity_id = $this->tab->insert_activity($data);
                   
            if (!empty($activity_id)) {
                $restData = $this->tab->get_activity($activity_id);
                $response['msg'] = 'Activity created successfully!';
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
            $result=$this->tab->get_activity($id);
            if (!empty($result)) {
                                   
                $status = $this->tab->update_activity($id, $data);
                if ($status) {
                    $restData = $this->tab->get_activity($id);
                    $response['msg'] = 'Tab updated successfully!';
                    $response['data'] = $restData;
                    $response['status'] = 200;
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
    
}