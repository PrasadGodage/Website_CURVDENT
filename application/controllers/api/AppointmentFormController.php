<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class AppointmentFormController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->model('AppointmentFormModel','appointment');
        
    }

    public function appointment_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->appointment->get_appointment($id);
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

    public function appointment_post() { 
        $response = [];
        $data['fullName'] = $this->post('fullName');
        $data['contactNo'] = $this->post('contactNo');
        $data['email'] = $this->post('email');
        $data['date'] = $this->post('date');
        $data['time'] = $this->post('time');
        $data['address'] = $this->post('address');
        
        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                      
            if (empty($id)) {
                if($this->appointment->find_appointment($data['fullName'])){
                   $appointment_id = $this->appointment->insert_appointment($data);

            if (!empty($appointment_id)) {
                $restData = $this->appointment->get_appointment($appointment_id);
                $response['msg'] = 'appointment created successfully!';
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
            $result=$this->appointment->get_appointment($id);
            if (!empty($result)) {
                // if($this->category->find_category($data['category_name']) || $result['category_name']==$data['category_name']){
                    
                $status = $this->appointment->update_appointment($id, $data);
                if ($status) {
                    $restData = $this->appointment->get_appointment($id);
                    $response['msg'] = 'appointment updated successfully!';
                    $response['data'] = $restData;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                }
            // }else{
            //     $response['msg'] = 'Duplicate Entry!';
            //     $response['status'] = 400;
            //     $this->response($response, REST_Controller::HTTP_OK);
            // }
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

    public function appointment_delete($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    if(!empty($id)){
                        $status = $this->appointment->delete_appointment($id);

                        if (!empty($status)) {
                            $response['data'] = $status;
                            $response['msg'] = 'Delete successfully!';
                            $response['status'] = 200;
                            $this->response($response, REST_Controller::HTTP_OK);
                        } else {
                            $response['msg'] = 'Data not Found!';
                            $response['status'] = 404;
                            $this->response($response, REST_Controller::HTTP_OK);
                        }
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