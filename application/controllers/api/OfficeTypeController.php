<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class OfficeTypeController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('OfficeTypeModel', 'type');
        
    }

    public function office_type_get($id = 0) {
        $response = [];

            
        try {
            
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->type->get_office_type($id);
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

    public function office_type_post() {
        $response = [];
        $data['type'] = $this->post('type');
        

        $id = $this->post('id');
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                        
            if (empty($id)) {
                if($this->type->find_office_type($data['type'])){
                   $type_id = $this->type->insert_office_type($data);

            if (!empty($type_id)) {
                $restData = $this->type->get_office_type($type_id);
                $response['msg'] = 'Office Type Inserted successfully!';
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
            $result=$this->type->get_office_type($id);
            if (!empty($result)) {
                if($this->type->find_office_type($data['type']) || $result['type']==$data['type']){
                    
                $status = $this->type->update_office_type($id, $data);
                if ($status) {
                    $restData = $this->type->get_office_type($id);
                    $response['msg'] = 'Office Type updated successfully!';
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
}