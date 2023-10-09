<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class AdminController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->helper('date');
        $this->load->model('AdminModel', 'admin');
        
    }

    public function admin_get($id=0,$flag=0) {
        $response = [];
        
        try {
           //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                
                if ($decodedToken['status'])
                {
                    $data = $this->admin->get_admin($id,$flag);
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

    public function admin_post() {
        $response = [];
        $data['role_id'] = $this->post('role_id');
        $data['profile_id'] = $this->post('profile_id');
        $data['office_branch_id'] = $this->post('office_branch_id');
        $data['name'] = $this->post('name');
        $data['dob'] = $this->post('dob');
        $data['age'] = $this->post('age');
        $data['aadhar_no'] = $this->post('aadhar_no');
        $data['pancard'] = $this->post('pancard');
        $data['password'] = $this->post('password');
        $data['address'] = $this->post('address');
        $data['country_id'] = $this->post('country_id');
        $data['state_id'] = $this->post('state_id');
        $data['city_id'] = $this->post('city_id');
        $data['area_id'] = $this->post('area_id');
        $data['pincode'] = $this->post('pincode');
        
        $data['contact_number1'] = $this->post('contact_number1');
        $data['contact_number2'] = $this->post('contact_number2');
        $data['email_id'] = $this->post('email_id');
        $data['is_active'] = ($this->post('is_active') == 'on' || $this->post('is_active') == 1) ? 1 : 0;
        $data['is_verified'] = ($this->post('is_verified') == 'on' || $this->post('is_verified') == 1) ? 1 : 0;
        

        $id = $this->post('id');
        
        //Authentication

        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                if (empty($id)) {
                    if($this->admin->find_admin($data['aadhar_no'])){
                        
                        $loop=1;
                        $prefix=$this->getPrefix();
                        
                        while($loop){
                            $randomNo=rand(1,10000);
                            
                            if($this->admin->find_userid($prefix.$randomNo)){
                                $data['userid']=$prefix.$randomNo;
                                $loop=0;
                            }
                        }
                        
                        $data['created_by'] = $this->post('created_by');
                        $data['created_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
                       
    
                       if (!empty($_FILES['profile_image']['name'])) {
                        $file_data['file_name'] = $_FILES['profile_image']['name'];
                        $file_data['file_type'] = $_FILES['profile_image']['type'];
                        $file_data['temp_name'] = $_FILES['profile_image']['tmp_name'];
                        $file_data['file_size'] = $_FILES['profile_image']['size'];
                         $data['profile_image']=$this->upload_docs($file_data);
                        
                    }
                    $admin_id = $this->admin->insert_admin($data);
                if (!empty($admin_id)) {
                    $restData = $this->admin->get_admin($admin_id,4);
                    $response['msg'] = 'Office Branch created successfully!';
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
                
                $result=$this->admin->get_admin($id,4);
                
                if (!empty($result)) {
                   
                        $data['modified_by'] = $this->post('created_by');
                        $data['modified_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
                        if (!empty($_FILES['profile_image']['name'])) {
                            if (!empty($result['profile_image'])) {
                                unlink($result['profile_image']);
                            }
                            $file_data['file_name'] = $_FILES['profile_image']['name'];
                            $file_data['file_type'] = $_FILES['profile_image']['type'];
                            $file_data['temp_name'] = $_FILES['profile_image']['tmp_name'];
                            $file_data['file_size'] = $_FILES['profile_image']['size'];
                             $data['profile_image']=$this->upload_docs($file_data);
                            
                        }
                    $status = $this->admin->update_admin($id, $data);
                    if ($status) {
                        $restData = $this->admin->get_admin($id,4);
                        $response['msg'] = 'Office Branch Updated successfully!';
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

    public function getPrefix(){
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < 2; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
    }

    public function upload_docs($file) {
        if (($file['file_type'] == "image/gif") || ($file['file_type'] == "image/jpeg") || ($file['file_type'] == "image/png") || ($file['file_type'] == "image/pjpeg")) {
            $ext = pathinfo($file['file_name'], PATHINFO_EXTENSION);
            $time = date('Y_m_d_hisu');
            $filename = $this->compress_image($file['temp_name'], "resource/img/employee/" . 'photo' . $time . "." . $ext, 50);
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
}