<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class VendorController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('VendorModel', 'vendor');
        
    }

    public function vendor_get($id = 0) {
        $response = [];

            
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $data = $this->vendor->get_vendor($id);
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

    public function vendor_post() {
        $response = [];
        $data['vendorName'] = $this->post('vendorName');
        $data['gstin'] = $this->post('gst');
        $data['country'] = $this->post('country_id');
        $data['state'] = $this->post('state_id');
        $data['city'] = $this->post('city_id');
        $data['address'] = $this->post('address');
        $data['email'] = $this->post('email');
        $data['contactFirm'] = $this->post('contactFirm');
        $data['contactSales'] = $this->post('contactSales');
        $data['contactTechnical'] = $this->post('contactTechnical');
        $data['pincode'] = $this->post('pincode');
       
        
        $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                      
            if (empty($id)) {
                if($this->vendor->find_vendor($data['vendorName'])){
                   $vendor_id = $this->vendor->insert_vendor($data);

            if (!empty($vendor_id)) {
                $restData = $this->vendor->get_vendor($vendor_id);
                $response['msg'] = 'vendor created successfully!';
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
            $result=$this->vendor->get_vendor($id);
            if (!empty($result)) {
                if($this->vendor->find_vendor($data['vendorName']) || $result['vendorName']==$data['vendorName']){
                    
                $status = $this->vendor->update_vendor($id, $data);
                if ($status) {
                    $restData = $this->vendor->get_vendor($id);
                    $response['msg'] = 'Vendor updated successfully!';
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