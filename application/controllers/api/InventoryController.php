<?php
defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class InventoryController extends REST_Controller
{

    public function __construct()
    {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('InventoryModel', 'inventory');

    }

    public function inventory_get($productId=0, $ppd_id=0)
    {

        $response = [];


        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status']) {
                    $data = $this->inventory->get_inventory($productId, $ppd_id);
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
                } else {
                    $this->response($decodedToken);
                }
            } else {
                $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
            }


        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    public function inventory_post()
    {
        //insert & update inventory details
        $response = [];
        $data['Product_Id'] = $this->post('productName');
        $data['IMEINo'] = $this->post('imeino');
        $data['UIDNo_ICCDENo'] = $this->post('uidno');
        $data['SIM1No'] = $this->post('simno1');
        $data['SIM2No'] = $this->post('simno2');
        $data['Note'] = $this->post('note');
        $data['StkStatus'] = $this->post('sktStatus');
        $data['purchaseDate'] = $this->post('purchaseDate');
        $data['PurchaseCreatedById'] = $this->post('purchCreatedBy');
        $data['VenderId'] = $this->post('vendorName');
        $data['PurchaseId'] = $this->post('purchaseId');
        $data['salesDate'] = $this->post('salesDate');
        $data['ClientId'] = $this->post('clientId');
        $data['SalesId'] = $this->post('salesId');
        $data['SalesCreatedById'] = $this->post('salesCreatedById');
        $data['ActivationDate '] = $this->post('activationDate');
        $data['RepaireInDate'] = $this->post('repairInDate');
        $data['RepairInCreatedById'] = $this->post('repairInCreatedBy');
        $data['RepairInId'] = $this->post('repairIn');
        $data['RepaireOutDate'] = $this->post('repairOutDate');
        $data['RepaireOutId'] = $this->post('repairOut');
        $data['RepairOutCreatedById'] = $this->post('repairOutCreatedBy');
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status']) {

                if (empty($id)) {
                    if ($this->inventory->find_inventory($data['productName'])) {
                        $product_id = $this->product->insert_product($data);

                        if (!empty($product_id)) {
                            $restData = $this->product->get_product($product_id);
                            $response['msg'] = 'Product created successfully!';
                            $response['data'] = $restData;
                            $response['status'] = 200;
                            $this->response($response, REST_Controller::HTTP_OK);
                        } else {
                            $response['msg'] = 'Bad Request!';
                            $response['id'] = $product_id;
                            $response['status'] = 400;
                            $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
                        }
                    } else {
                        $response['msg'] = 'Duplicate Entry!';
                        $response['status'] = 400;
                        $this->response($response, REST_Controller::HTTP_OK);
                    }




                }




            }





        }

    }


    public function salesInventory_get($productId=0, $sm_id=0)
    {

        $response = [];


        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status']) {
                    $data = $this->inventory->get_salesInventory($productId, $sm_id);
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
                } else {
                    $this->response($decodedToken);
                }
            } else {
                $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
            }


        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
}