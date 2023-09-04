<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class SalesController extends REST_Controller {

    public function __construct() {


        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->helper('date');
        $this->load->model('SalesModel', 'sales');
        $this->load->model('SalesDetailModel', 'sDetails');
         $this->load->model('InventoryModel', 'inventory');
        
    }

    public function sales_get($id = 0) {
        $response = [];
    
        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status'])
                {
                    $results =array();
 
                    $salesData = $this->sales->get_sales($id);
                    
                    foreach ($salesData as $s) { 
                        
                        $sDetailsArr=(object) array("salesDetail"=>$this->sDetails->get_salesDetail($s->id));
                        $itemDetailsArr=(object) array("itemDetail"=>$this->inventory->get_salesInventory(0,$s->id));

                        $obj_merged = (object) array_merge((array) $s, (array) $sDetailsArr,(array) $itemDetailsArr);
                        //$tempArr=array($p,$pDetails);
                        array_push($results,$obj_merged);
                        
                      }

                    if (!empty($salesData)) {
                        $response['data'] = $results;
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

    public function sales_post() {
           
        $response = [];
        $arrJson = json_decode($this->post('salesDetails'));
        $id = $this->post('id');
        $data = array();
        $salesData = [];
        $inventoryData = array();

        $salesData['client_id'] = $arrJson[0]->clientId;
        $salesData['salesOrderNo'] = $arrJson[0]->soid;
        $salesData['totalQty'] = count($arrJson);
        $salesData['itemTotalAmt'] = $this->post('itemTotalAmt');
        $salesData['totalDisc'] = 0;
        $salesData['totalTax'] = 0;
        $salesData['netBill'] = 0;
        $salesData['paymentMtd'] = $this->post('paymentMtd');
        $salesData['created_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
        $salesData['createdBy'] = $this->post('created_by');
        $salesData['lastModified_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
        $salesData['lastModifiedBy'] =$this->post('created_by');
        $salesData['salesDate'] = mdate('%Y-%m-%d %H:%i:%s', now());
        
         // $id = $this->post('id');
        
        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status'])
            {
                      
            if (empty($id)) {
             //   if($this->sales->find_sales($data['client_id'])){
                   $sales_id = $this->sales->insert_sales($salesData);
                //    return print_r($sales_id);    
                   //for loop and count products entry
                   $index = 0;
                   foreach ($arrJson as $item) {
                    $count = 0;
                    foreach ($arrJson as $i) {
                        if ($i->Product_Id == $item->Product_Id) {
                            $count++;
                        }
                    }
                    if ($index == 0) {
                        $tempData = array(
                            'sm_id' => $sales_id,
                            'product_id' => $item->Product_Id,
                            'totalQty' => $count,
                            'itemTotalAmt' => $salesData['itemTotalAmt'],
                            'itemtotalDisc' => 0,
                            'itemtotalTax' => 0,
                            'itemnetBill' => 0
                        );
                        array_push($data, $tempData);
                    }else{
                        $flag=true;
                        foreach ($data as $tempItem) {
                            if ($tempItem['product_id'] == $item->Product_Id) {
                                $flag=false;
                                break;
                            }
                        }
                        if($flag){
                            $tempData = array(
                                'sm_id' => $sales_id,
                                'product_id' => $item->Product_Id,
                                'totalQty' => $count,
                                'itemTotalAmt' => $salesData['itemTotalAmt'],
                                'itemtotalDisc' => 0,
                                'itemtotalTax' => 0,
                                'itemnetBill' => 0
                            );
                            array_push($data, $tempData);
                           } 
                        }
                        $tempInventory = array(
                            'id' => $item->IMEINo,
                            'StkStatus' => 'Sales',
                            'salesDate' => $salesData['salesDate'],
                            'SalesCreatedById' => $salesData['lastModifiedBy'],
                            'ClientId' => $salesData['client_id'],
                            'SalesId' => $sales_id
                        );
                        array_push($inventoryData, $tempInventory);

                        $index++;
                    }
                    $this->sDetails->insert_salesDetail($data);
                    $this->inventory->update_inventory($inventoryData);
                    $results = array();

                    $salesData = $this->sales->get_sales($sales_id);
                    
                    foreach ($salesData as $s) {

                        $sDetailsArr = (object) array("salesDetail" => $this->sDetails->get_salesDetail($s->id));
                        $itemDetailArr=(object) array("itemDetail"=>$this->inventory->get_salesInventory(0,$s->id));

                        $obj_merged = (object) array_merge((array) $s, (array) $sDetailsArr,(array) $itemDetailArr);
                        //$tempArr=array($p,$pDetails);

                        array_push($results, $obj_merged);

                    }                    
                          

            if (!empty($results)) {
                $response['data'] = $results;
                $response['msg'] = 'Sales created successfully!';
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                $response['msg'] = 'Bad Request!';
                $response['id'] = $id;
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            } 
               /* }else{
                    $response['msg'] = 'Duplicate Entry!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_OK);
                }*/
                
        
        } else {
            $result=$this->sales->get_sales($id);
            if (!empty($result)) {
               // if($this->sales->find_sales($data['client_id']) || $result['client_id']==$data['client_id']){
                    
                $status = $this->sales->update_sales($id, $data);
                if ($status) {
                    $restData = $this->sales->get_sales($id);
                    $response['msg'] = 'Sales updated successfully!';
                    $response['data'] = $restData;
                    $response['status'] = 200;
                    $this->response($response, REST_Controller::HTTP_OK);
                }
            /*}else{
                $response['msg'] = 'Duplicate Entry!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_OK);
            }*/
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
        }
        else {
            $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        }
        
    }
}