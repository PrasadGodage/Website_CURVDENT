<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class ContactFormController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->model('NewsletterModel','newsletter');
        
    }

    public function contact_get() {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->newsletter->get_contact();
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

    
    public function newsletter_delete($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    if(!empty($id)){
                        $status = $this->newsletter->delete_newsletter($id);

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