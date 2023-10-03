<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class PostNewsletterController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token'); 
        $this->load->helper('date');
        $this->load->helper('url');
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
        $data = [];
        $newsData['title'] = $this->post('title');
        $newsData['content'] = $this->post('content');
        $newsData['date'] = mdate('%Y-%m-%d %H:%i:%s', now());
     
        
        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();
        
        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                
                if (empty($id)) {
                    if($this->postingNews->find_postingNews($newsData['title'])){

                $config['upload_path']   = './uploads/'; // Same as in the config file
                $config['allowed_types'] = 'pdf';
                $config['max_size']      = 10240; // 10 MB (in kilobytes)
                // $config['file_name']     = 'website_Requirement.pdf'; // Optional: Define a custom filename if needed

                $this->load->library('upload', $config);

                if ($this->upload->do_upload('PDF')) {
                    // Upload successful, you can do further processing here
                    $data = $this->upload->data();
                    $pdf_path = 'uploads/' . $data['file_name'];

                    // echo "<prev>";
                    // print_r($data);

                    $newsData['PDF']=$pdf_path;
                    // Perform actions with $pdf_path (e.g., save it to the database)
                    
                    echo 'PDF uploaded successfully.';
                } else {
                    // Upload failed, show error messages
                    echo $this->upload->display_errors();
                }

                     $posting_id = $this->postingNews->insert_postingNews($newsData);
            if (!empty($posting_id)) {
                $restData = $this->postingNews->get_postingNews($posting_id);
                $response['msg'] = 'NewsLetter created successfully!';
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
            $result=$this->postingNews->get_postingNews($id);
            if (!empty($result)) {

                
                
                $status = $this->postingNews->update_postingNews($id, $newsData);
                if ($status) {
                    $restData = $this->postingNews->get_postingNews($id);
                    $response['msg'] = 'newsLetter updated successfully!';
                    $response['data'] = $restData;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                }
            else{
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
  public function destination($file_name){

     return $file_name;

  }
    
    
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