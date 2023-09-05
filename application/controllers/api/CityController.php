<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;
class CityController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('CityModel', 'city');
       
    }

    public function city_get($id = 0) {
        $response = [];
        
        try {
        
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->city->get_city($id,0);
                  
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

    public function stateCity_get($id){
        $response = [];

           
        try {
           
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->city->get_city($id,2);
                     
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
    public function city_post() {
        $response = [];
        $data['state_id'] = $this->post('citystate_id');
        $data['country_id'] = $this->post('country_id');
        $data['city'] = $this->post('city');
        
        $id = $this->post('city_id');
            
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                if (empty($id)) {
                    if($this->city->find_city($data['city'],$data['state_id'])){
                       $city_id = $this->city->insert_city($data);
    
                if (!empty($city_id)) {
                    $response['msg'] = 'City Inserted successfully!';
                    $response['id'] = $city_id;
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
                $result=$this->city->get_city($id,1);
                if (!empty($result)) {
                    if($this->city->find_city($data['city'],$data['state_id'])){
                        
                    $status = $this->city->update_city($id, $data);
                    if ($status) {
                        $response['msg'] = 'City updated successfully!';
                        $response['id'] = $id;
                        $response['status'] = 200;
                        $this->response($response, REST_Controller::HTTP_OK);
                    }
                }else{
                    $response['msg'] = 'Entry Already Present!';
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