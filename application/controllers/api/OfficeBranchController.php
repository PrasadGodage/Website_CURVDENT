<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class OfficeBranchController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->helper('date');
        $this->load->model('OfficeBranchModel', 'branch');
    }

    public function branch_get($id = 0) {
        $response = [];

            
        try {
            
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->branch->get_branch($id);
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

    public function branch_post() {
        
        $data['office_type_id'] = $this->post('office_type_id');
        $data['office_name'] = $this->post('office_name');
        $data['address'] = $this->post('address');
        $data['country_id'] = $this->post('country_id');
        $data['state_id'] = $this->post('state_id');
        $data['city_id'] = $this->post('city_id');
        $data['area_id'] = $this->post('area_id');
        $data['pincode'] = $this->post('pincode');
        $data['hod_id'] = $this->post('hod_id');
        $data['contact_number1'] = $this->post('contact_number1');
        $data['contact_number2'] = $this->post('contact_number2');
        $data['email_id'] = $this->post('email_id');
        
        

        $id = $this->post('id');
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                     
            if (empty($id)) {
                if($this->branch->find_branch($data['office_type_id'],$data['office_name'])){
                    $data['created_by'] = $this->post('created_by');
                    $data['created_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
                   $branch_id = $this->branch->insert_branch($data);

            if (!empty($branch_id)) {
                $restData = $this->branch->get_branch($branch_id);
                $response['msg'] = 'Office Branch created successfully!';
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
            $result=$this->branch->get_branch($id);
            if (!empty($result)) {
                  
                    $data['modified_by'] = $this->post('created_by');
                    $data['modified_at'] = mdate('%Y-%m-%d %H:%i:%s', now());;
                $status = $this->branch->update_branch($id, $data);
                if ($status) {
                    $restData = $this->branch->get_branch($id);
                    $response['msg'] = 'Office Branch Updated successfully!';
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