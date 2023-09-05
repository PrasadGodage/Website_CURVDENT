<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class StateController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('StateModel', 'state');
        
    }

    public function state_get($id = 0) {
        
        try {
        
            //Authentication

            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->state->get_state($id,0);
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

    public function state_post() {
        
        $data['country_id'] = $this->post('country_id');
        $data['state'] = $this->post('state');
        $data['is_active'] = ($this->post('is_active') == 'on' || $this->post('is_active') == 1) ? 1 : 0;

        $id = $this->post('state_id');
        
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                
            if (empty($id)) {
                if($this->state->find_state($data['state'],$data['country_id'])){
                   $state_id = $this->state->insert_state($data);

            if (!empty($state_id)) {
                $restData = $this->state->get_state($state_id,1);
                $response['msg'] = 'State Inserted successfully!';
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
            $result=$this->state->get_state($id,1);
            
            if (!empty($result)) {
                
                            
                $status = $this->state->update_state($id, $data);
                if ($status) {
                    $restData=$this->state->get_state($id,1);
                    $response['msg'] = 'State updated successfully!';
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

    public function state_delete_get($id){
        
        try {
            
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->state->delete_state($id);
                    if (!empty($data)) {
                        $response['data'] = $data;
                        $response['msg'] = 'State Deleted successfully!';
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