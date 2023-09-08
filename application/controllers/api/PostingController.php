<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class PostingController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->model('PostingModel','posting');
        
    }

    public function posting_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->posting->get_posting($id);
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

    public function posting_post() { 
        $response = [];
        $data['title'] = $this->post('title');
        $data['seo_title'] = $this->post('seo_title');
        $data['content'] = $this->post('content');
        $data['featured'] = $this->post('featured');
        $data['choice'] = $this->post('choice');
        $data['thread'] = $this->post('thread');
        $data['id_category'] = $this->post('id_category');
        $data['photo'] = $this->post('photo');
        $data['date'] = $this->post('date');
        $data['is_active'] = $this->post('is_active');

        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                      
            if (empty($id)) {
                if($this->posting->find_posting($data['title'])){
                   $posting_id = $this->posting->insert_posting($data);

            if (!empty($posting_id)) {
                $restData = $this->posting->get_posting($posting_id);
                $response['msg'] = 'Posting created successfully!';
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
            $result=$this->posting->get_posting($id);
            if (!empty($result)) {
                if($this->posting->find_posting($data['title']) || $result['title']==$data['title']){
                    
                $status = $this->posting->update_posting($id, $data);
                if ($status) {
                    $restData = $this->posting->get_posting($id);
                    $response['msg'] = 'Posting updated successfully!';
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