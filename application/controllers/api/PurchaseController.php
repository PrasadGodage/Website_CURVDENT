<?php

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class PurchaseController extends REST_Controller
{

    public function __construct()
    {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->helper('date');
        $this->load->model('PurchaseModel', 'purchase');
        $this->load->model('PurchaseDetailModel', 'pDetails');
        $this->load->model('InventoryModel', 'inventory');

    }

    public function purchase_get($id = 0)
    {
        $response = [];

        try {
            //Authentication
            $headers = $this->input->request_headers();

            if (isset($headers['Authorization'])) {
                $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
                if ($decodedToken['status']) {
                    $results = array();

                    $purchaseData = $this->purchase->get_purchase($id);

                    foreach ($purchaseData as $p) {

                        $pDetailArr = (object) array("purchaseDetail" => $this->pDetails->get_purchaseDetail($p->id));
                        $itemDetailArr=(object) array("itemDetail"=>$this->inventory->get_inventory(0,$p->id));

                        $obj_merged = (object) array_merge((array) $p, (array) $pDetailArr,(array) $itemDetailArr);
                        //$tempArr=array($p,$pDetails);
                        array_push($results, $obj_merged);

                    }


                    if (!empty($purchaseData)) {
                        $response['data'] = $results;
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

    public function purchase_post()
    {
        $response = [];
        $arrJson = json_decode($this->post('purchaseDetails'));
        $id = $this->post('id');
        $data = array();
        $purchaseData = [];
        $inventoryData = array();


        $purchaseData['vendor_id'] = $arrJson[0]->VenderId;
        $purchaseData['purchaseOrderNo'] = $arrJson[0]->poid;
        $purchaseData['totalQty'] = count($arrJson);
        $purchaseData['itemTotalAmt'] = $this->post('itemTotalAmt');  //$this->post('itemTotalAmt');
        $purchaseData['totalDisc'] = 0;
        $purchaseData['totalTax'] = 0;
        $purchaseData['netBill'] = 0;
        $purchaseData['paymentMtd'] = $this->post('paymentMtd');
        $purchaseData['created_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
        $purchaseData['createdBy'] = $this->post('created_by');
        $purchaseData['lastModified_at'] = mdate('%Y-%m-%d %H:%i:%s', now());
        $purchaseData['lastModifiedBy'] = $this->post('created_by');
        $purchaseData['purchaseDate'] = mdate('%Y-%m-%d %H:%i:%s', now());


        //print_r($data);exit();

        //Authentication
        $headers = $this->input->request_headers();

        if (isset($headers['Authorization'])) {
            $decodedToken = $this->authorization_token->validateToken($headers['Authorization']);
            if ($decodedToken['status']) {

                if (empty($id)) {
                    // if($this->purchase->find_purchase($data['vendor_id'])){
                    $purchase_id = $this->purchase->insert_purchase($purchaseData);
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
                                'ppm_id' => $purchase_id,
                                'product_id' => $item->Product_Id,
                                'totalQty' => $count,
                                'itemTotalAmt' => $purchaseData['itemTotalAmt'],
                                'itemtotalDisc' => 0,
                                'itemtotalTax' => 0,
                                'itemnetBill' => 0,
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
                                    'ppm_id' => $purchase_id,
                                    'product_id' => $item->Product_Id,
                                    'totalQty' => $count,
                                    'itemTotalAmt' => $purchaseData['itemTotalAmt'],
                                    'itemtotalDisc' => 0,
                                    'itemtotalTax' => 0,
                                    'itemnetBill' => 0,
                                );
                                array_push($data, $tempData);
                               } 
                              
                        }
                        $tempInventory = array(
                            'Product_Id' => $item->Product_Id,
                            'IMEINo' => $item->IMEINo,
                            'UIDNo_ICCDENo' => $item->UIDNo_ICCDENo,
                            'SIM1No' => $item->SIM1No,
                            'SIM2No' => $item->SIM2No,
                            'StkStatus' => 'Purchase',
                            'purchaseDate' => $purchaseData['purchaseDate'],
                            'PurchaseCreatedById' => $purchaseData['lastModifiedBy'],
                            'VenderId' => $purchaseData['vendor_id'],
                            'PurchaseId' => $purchase_id
                        );
                        array_push($inventoryData, $tempInventory);


                        $index++;
                    }
                    $this->pDetails->insert_purchaseDetail($data);
                    $this->inventory->insert_inventory($inventoryData);

                    $results = array();

                    $purchaseData = $this->purchase->get_purchase($purchase_id);

                    foreach ($purchaseData as $p) {

                        $pDetailsArr = (object) array("purchaseDetail" => $this->pDetails->get_purchaseDetail($p->id));
                        $itemDetailArr=(object) array("itemDetail"=>$this->inventory->get_inventory(0,$p->id));

                        $obj_merged = (object) array_merge((array) $p, (array) $pDetailsArr,(array) $itemDetailArr);
                        //$tempArr=array($p,$pDetails);

                        array_push($results, $obj_merged);

                    }



                    if (!empty($results)) {

                        $response['data'] = $results;
                        $response['msg'] = 'Purchase created successfully!';
                        $response['status'] = 200;
                        $this->response($response, REST_Controller::HTTP_OK);
                    } else {
                        $response['msg'] = 'Bad Request!';
                        $response['id'] = $id;
                        $response['status'] = 400;
                        $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
                    }
                    /*        }else{
                                $response['msg'] = 'Duplicate Entry!';
                            $response['status'] = 400;
                            $this->response($response, REST_Controller::HTTP_OK);
                            }*/

                } else {
                    $result = $this->purchase->get_purchase($id);
                    if (!empty($result)) {
                        // if($this->purchase->find_purchase($data['vendor_id']) || $result['vendor_id']==$data['vendor_id']){

                        $status = $this->purchase->update_purchase($id, $data);
                        if ($status) {
                            $restData = $this->purchase->get_purchase($id);
                            $response['msg'] = 'Purchase updated successfully!';
                            $response['data'] = $restData;
                            $response['status'] = 200;
                            $this->response($response, REST_Controller::HTTP_OK);
                        }
                        /* }else{
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

            } else {
                $this->response($decodedToken);
            }
        } else {
            $this->response(['Authentication failed'], REST_Controller::HTTP_OK);
        }

    }
}