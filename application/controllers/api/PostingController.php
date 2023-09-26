<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class PostingController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->helper('date');
        $this->load->model('PostingModel','posting');
        // $this->load->model('AdminModel','admin');
        
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
        // $data['photo'] = $this->post('photo');
        $data['date'] = mdate('%Y-%m-%d %H:%i:%s', now());
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

                    if (!empty($_FILES['photo']['name'])) {
                    $file_data['file_name'] = $_FILES['photo']['name'];
                    $file_data['file_type'] = $_FILES['photo']['type'];
                    $file_data['temp_name'] = $_FILES['photo']['tmp_name'];
                    $file_data['file_size'] = $_FILES['photo']['size'];
                       $data['photo']=$this->upload_docs($file_data);
                    
                }

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

                
                // if($this->posting->find_posting($data['title']) || $result['title']==$data['title']){
                    
                    // $data['modified_by'] = $this->post('created_by');
                    // $data['date'] = mdate('%Y-%m-%d %H:%i:%s', now());
                    if (!empty($_FILES['photo']['name'])) {
                        if (!empty($result['photo'])) {
                            unlink($result['photo']);
                        }
                        $file_data['file_name'] = $_FILES['photo']['name'];
                        $file_data['file_type'] = $_FILES['photo']['type'];
                        $file_data['temp_name'] = $_FILES['photo']['tmp_name'];
                        $file_data['file_size'] = $_FILES['photo']['size'];
                         $data['photo']=$this->upload_docs($file_data);
                        
                    }
                $status = $this->posting->update_posting($id, $data);
                if ($status) {
                    $restData = $this->posting->get_posting($id);
                    $response['msg'] = 'Posting updated successfully!';
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

    
    public function upload_docs($file) {
        if (($file['file_type'] == "image/gif") || ($file['file_type'] == "image/jpeg") || ($file['file_type'] == "image/png") || ($file['file_type'] == "image/pjpeg")) {
            $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
            $time = date('Y_m_d_hisu');
            $filename = $this->compress_image($file['temp_name'], "resource/img/blog/" . 'photo' . $time . "." . $ext, 50);
            return $filename;
        }
    }

    function compress_image($source_url, $destination_url, $quality) {
        $info = getimagesize($source_url);
        if ($info['mime'] == 'image/jpeg')
            $image = imagecreatefromjpeg($source_url);
        elseif ($info['mime'] == 'image/gif')
            $image = imagecreatefromgif($source_url);
        elseif ($info['mime'] == 'image/png')
            $image = imagecreatefrompng($source_url);
        imagejpeg($image, $destination_url, $quality);
        return $destination_url;
    }

    public function posting_delete($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    if(!empty($id)){
                        $status = $this->posting->delete_posting($id);

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