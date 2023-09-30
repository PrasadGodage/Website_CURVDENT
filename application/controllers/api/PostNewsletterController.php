<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class PostNewsletterController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->helper('date');
        $this->load->model('PostNewsletterModel','postingNews');
        
    }

    public function postingNews_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->postingNews->get_postingNews($id);
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

    public function postingNews_post() { 
        $response = [];
        $data['title'] = $this->post('title');
        $data['content'] = $this->post('content');
        // $data['photo'] = $this->post('photo');
        $data['date'] = mdate('%Y-%m-%d %H:%i:%s', now()); 
        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();
        
        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                
                if (empty($id)) {
                    // if($this->postingNews->find_postingNews($data['title'])){

                    if (!empty($_FILES['PDF']['name'])) {
                    $file_data['file_name'] = $_FILES['PDF']['name'];
                    $file_data['file_type'] = $_FILES['PDF']['type'];
                    $file_data['temp_name'] = $_FILES['PDF']['tmp_name'];
                    $file_data['file_size'] = $_FILES['PDF']['size'];
                       $data['PDF']=$this->upload_docs($file_data);
                    
                }

                $posting_id = $this->postingNews->insert_postingNews($data);
            if (!empty($posting_id)) {
                $restData = $this->postingNews->get_postingNews($posting_id);
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
                // }else{
                //     $response['msg'] = 'Duplicate Entry!';
                // $response['status'] = 400;
                // $this->response($response, REST_Controller::HTTP_OK);
                // }
                
        } else {
            $result=$this->postingNews->get_postingNews($id);
            if (!empty($result)) {

                
                // if($this->posting->find_posting($data['title']) || $result['title']==$data['title']){
                    
                    // $data['modified_by'] = $this->post('created_by');
                    // $data['date'] = mdate('%Y-%m-%d %H:%i:%s', now());
                    if (!empty($_FILES['PDF']['name'])) {
                        if (!empty($result['PDF'])) {
                            unlink($result['PDF']);
                        }
                        $file_data['file_name'] = $_FILES['PDF']['name'];
                        $file_data['file_type'] = $_FILES['PDF']['type'];
                        $file_data['temp_name'] = $_FILES['PDF']['tmp_name'];
                        $file_data['file_size'] = $_FILES['PDF']['size'];
                         $data['PDF']=$this->upload_docs($file_data);
                        
                    }
                $status = $this->postingNews->update_postingNews($id, $data);
                if ($status) {
                    $restData = $this->postingNews->get_postingNews($id);
                    $response['msg'] = 'PostingNewsletter updated successfully!';
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

    
    // public function upload() {
    //     $config['upload_path']   = './uploads/';
    //     $config['allowed_types'] = 'pdf';
    //     $config['max_size']      = 2048;  // Maximum file size in kilobytes (2MB)

    //     $this->load->library('upload', $config);

    //     if (!$this->upload->do_upload('pdf_file')) {
    //         $error = array('error' => $this->upload->display_errors());
    //         // Handle the error
    //     } else {
    //         // File uploaded successfully, process it as needed
    //         $data = array('upload_data' => $this->upload->data());
    //         // You can handle the uploaded file data here
    //     }
    // }

    
    // public function upload_docs($file) {
    //     if (($file['file_type'] == "image/gif") || ($file['file_type'] == "image/jpeg") || ($file['file_type'] == "image/png") || ($file['file_type'] == "image/pjpeg") || ($file['file_type'] == "application/pdf")) {
    //         $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
    //         $time = date('Y_m_d_hisu');
    //         $filename = $this->compress_image($file['temp_name'], "resource/img/blog/" . 'photo' . $time . "." . $ext, 50);
    //         return $filename;
    //     }
    // }
    public function upload_docs($file) {
        if (($file['file_type'] == "application/pdf")) {
            $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
            $time = date('Y_m_d_hisu');
            $filename = $this->compress_pdf($file['temp_name'], "resource/pdf/" . 'pdf' . $time . "." . $ext, 10240);
            return $filename;
        }
    }

    // function compress_image($source_url, $destination_url, $quality) {
    //     $info = getimagesize($source_url);
    //     if ($info['mime'] == 'image/jpeg')
    //         $image = imagecreatefromjpeg($source_url);
    //     elseif ($info['mime'] == 'image/gif')
    //         $image = imagecreatefromgif($source_url);
    //     elseif ($info['mime'] == 'image/png')
    //         $image = imagecreatefrompng($source_url);
    //     imagejpeg($image, $destination_url, $quality);
    //     return $destination_url;
    // }

    // public function upload_docs($file) {
    //     $allowed_image_types = ["image/gif", "image/jpeg", "image/png", "image/pjpeg"];
    //     $allowed_pdf_types = ["application/pdf"];
    
    //     if (in_array($file['file_type'], $allowed_image_types)) {
    //         $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
    //         $time = date('Y_m_d_hisu');
    //         $filename = $this->compress_image($file['temp_name'], "resource/img/blog/photo{$time}.{$ext}", 50);
    //         return $filename;
    //     } elseif (in_array($file['file_type'], $allowed_pdf_types)) {
    //         $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
    //         $time = date('Y_m_d_hisu');
    //         $filename = $this->move_pdf($file['temp_name'], "resource/pdf/pdf{$time}.{$ext}");
    //         return $filename;
    //     }
    //       else
    //         return false; // Unsupported file type
    // }
    
    function compress_pdf($source_url, $destination_url, $quality) {
        // Your image compression logic remains the same
        // // ...
        // $info = getimagesize($source_url);
        
        // if ($info['mime'] === 'image/pdf')
        //     $image = imagecreatefrompng($source_url);
        // imagejpeg($image, $destination_url, $quality);
        return $destination_url;
    }
    // function compress_image($source_url, $destination_url, $quality) {
    //     // Your image compression logic remains the same
    //     // ...
    //     $info = getimagesize($source_url);
    //     if ($info['mime'] == 'image/jpeg')
    //         $image = imagecreatefromjpeg($source_url);
    //     elseif ($info['mime'] == 'image/gif')
    //         $image = imagecreatefromgif($source_url);
    //     elseif ($info['mime'] == 'image/png')
    //         $image = imagecreatefrompng($source_url);
    //     imagejpeg($image, $destination_url, $quality);
    //     return $destination_url;
    // }
    
    // function move_pdf($source_url, $destination_url) {
    //     if (move_uploaded_file($source_url, $destination_url)) {
    //         return $destination_url;
    //     } else {
    //         return false; // Failed to move PDF
    //     }
    // }
    

    public function postingNews_delete($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    if(!empty($id)){
                        $status = $this->postingNews->delete_postingNews($id);

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