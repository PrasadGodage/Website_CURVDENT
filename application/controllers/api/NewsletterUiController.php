<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class NewsletterUiController extends REST_Controller {

    public function __construct() {

        parent::__construct();
      //  $this->load->library('Authorization_Token'); 
        $this->load->model('NewsletterModel','newsletter');
        
    }

    public function newsletter_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            // $headers = $this->input->request_headers();

            // if (isset($headers['Authorization'])) {
            //     $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            //     if ($decodedToken['status'])
            //     {
                    $data = $this->newsletter->get_newsletter($id);
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
                    //     }else {
                    //     $this->response($decodedToken);
                    // }
                    // }else {
                    //     $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
                    // }

            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

    public function newsletter_post() { 
        $response = [];
        $data['email'] = $this->post('email');
        //$data['is_active'] = $this->post('is_active');

        $id = $this->post('id');
        
        // //Authentication
        // $headers = $this->input->request_headers();

        // if (isset($headers['Authorization'])) {
        //     $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
        //     if ($decodedToken['status'])
        //     {
                      
            if (empty($id)) {
                if($this->newsletter->find_newsletter($data['email'])){
                   $newsletter_id = $this->newsletter->insert_newsletter($data);

            if (!empty($newsletter_id)) {
                $restData = $this->newsletter->get_newsletter($newsletter_id);
                $response['msg'] = 'Newsletter created successfully!';
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
            $result=$this->newsletter->get_newsletter($id);
            if (!empty($result)) {
                // if($this->category->find_category($data['category_name']) || $result['category_name']==$data['category_name']){
                    
                $status = $this->newsletter->update_newsletter($id, $data);
                if ($status) {
                    $restData = $this->newsletter->get_newsletter($id);
                    $response['msg'] = 'Newsletter updated successfully!';
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
      
        //     }else {
        //     $this->response($decodedToken);
        // }
        // }else {
        //     $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        // }
        
    }

    public function newsletter_delete($id = 0) {
        $response = [];

            
        try {
            //Authentication
            // $headers = $this->input->request_headers();

            // if (isset($headers['Authorization'])) {
            //     $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            //     if ($decodedToken['status'])
            //     {
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
            //     }else {
            //         $this->response($decodedToken);
            //     }
                
            // }else {
            //     $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
            // }

            
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }


}