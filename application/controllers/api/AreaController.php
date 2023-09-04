<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class AreaController extends REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('AreaModel', 'area');
    }

    public function area_get($id = 0) {
        $response = [];

            
        try {
           //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->area->get_area($id);
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

    public function area_post() {
        $response = [];
        $data['city_id'] = $this->post('city_id');
        $data['area'] = $this->post('area');
        

        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();
        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                if (empty($id)) {
                    if($this->area->find_area($data['city_id'],$data['area'])){
                       $area_id = $this->area->insert_area($data);
    
                if (!empty($area_id)) {
                    $response['msg'] = 'Area Inserted successfully!';
                    $response['id'] = $area_id;
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
                $result=$this->area->get_area($id);
                if (!empty($result)) {
                    if($this->area->find_area($data['city_id'],$data['area']) || $result['area']==$data['area']){
                        
                    $status = $this->area->update_area($id, $data);
                    if ($status) {
                        $response['msg'] = 'Area updated successfully!';
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
}