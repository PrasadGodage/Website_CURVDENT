<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ClientLoginController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->model('ClientModel','client');
        
    }

    public function client_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->client->get_client($id);
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

    public function client_post() { 
        $response = [];
        $data['firstName'] = $this->post('firstName');
        $data['lastName'] = $this->post('lastName');
        $data['email'] = $this->post('email');
        $data['address1'] = $this->post('address1');
        $data['address2'] = $this->post('address2');
        $data['city'] = $this->post('city_id');
        $data['state'] = $this->post('state_id');
        $data['country'] = $this->post('country_id');
        $data['postcode'] = $this->post('postcode');
        $data['orderNote'] = $this->post('orderNote');
        $data['openOutstanding'] = $this->post('openOutstanding');
        $data['outstanding'] = $this->post('outstanding');
        $data['contact'] = $this->post('phone'); 
        $data['status'] = ($this->post('status') == 'on' || $this->post('status') == 1) ? 1 : 0;
        

        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                      
            if (empty($id)) {
                if($this->client->find_client($data['firstName'])){
                   $client_id = $this->client->insert_client($data);

            if (!empty($client_id)) {
                $restData = $this->client->get_client($client_id);
                $response['msg'] = 'client created successfully!';
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
            $result=$this->client->get_client($id);
            if (!empty($result)) {
                if($this->client->find_client($data['firstName']) || $result['firstName']==$data['firstName']){
                    
                $status = $this->client->update_client($id, $data);
                if ($status) {
                    $restData = $this->client->get_client($id);
                    $response['msg'] = 'client updated successfully!';
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