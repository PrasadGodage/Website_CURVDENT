<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\TabModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class TabController extends BaseController
{
    use ResponseTrait;

    
    // public function __construct()
    // {
    //     $tabModel = new TabModel();
    // }
    public function getTab($id=0)
    {
        $tabModel = new TabModel();

        // Fetch all products from the database
        // $data = $tabModel->findAll();
        $data = $tabModel->get_all_data($id);

        if (!empty($data)) {
            $response = [
                'status' => 200,
                'message' => 'All Data Fetch successfully!',
                'data' => $data
            ];
            return $this->response->setJSON($response);
        } else {
            $response = [
                'status' => 404,
                'message' => 'Data not Found!'
            ];
            return $this->response->setJSON($response);
        }
       
    }

    public function postTab()
    {
        $tabModel = new TabModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        // $data = [
        //     'tab_name' => $this->request->getVar('tab_name'),
        //     'is_subtab' => $this->request->getVar('is_subtab'),
        //     'icon_id' => $this->request->getVar('icon_id'),
        //     'is_active' => $this->request->getVar('is_active'),
            
        // ];
        $data['tab_name'] = $this->request->getVar('tab_name');
        $data['icon_id'] = $this->request->getVar('icon_id');
        $data['is_active'] = ($this->request->getVar('is_active') == 'on' || $this->request->getVar('is_active') == 1) ? 1 : 0;
        $data['is_subtab'] = ($this->request->getVar('is_subtab') == 'on' || $this->request->getVar('is_subtab') == 1) ? 1 : 0;
        $id = $this->request->getPost('id');
        // echo "<pre>";
        // print_r("id:" . $id);
        $result= $tabModel->save($data);

        if(empty($id)){

            if(!empty($result)){
                
                $response = [
                    'status' => 200,
                    'message' => 'Tab Data Created Successfully!',
                    'data' => $result
                ];
                return $this->response->setJSON($response);
            }
            else
            {
                $response = [
                    'status' => 404,
                    'message' => 'Data not Found!'
                ];
                return $this->response->setJSON($response); 
            }
        }else{
            $result = $tabModel->get_all_data($id);
            // print_r("result: " . $id);
            if($result){

                $status = $tabModel->update_data($id,$data);

                if(!empty($status)){
                
                    $response = [
                        'status' => 200,
                        'message' => 'Tab Data Updated Successfully!',
                        'data' => $status
                    ];
                    return $this->response->setJSON($response);
                }
                else
                {
                    $response = [
                        'status' => 404,
                        'message' => 'Data not Found!'
                    ];
                    return $this->response->setJSON($response); 
                }
            }
        }

    }

    public function updateTab($id)
    {
        $tabModel = new TabModel();
    } 
    
}
