<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\IconModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class IconController extends BaseController
{
    use ResponseTrait;

    
    public function getIcon($id=0)
    {
        $iconModel = new IconModel();

        // Fetch all products from the database
        $data = $iconModel->findAll();

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

    public function postIcon()
    {
        $iconModel = new IconModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'icon_title' => $this->request->getVar('icon_title'),
            'icon' => $this->request->getVar('icon'),
        ];
        $id = $this->request->getPost('id');
        if(empty($id)){

            $result= $iconModel->save($data);
                
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
            $result = $iconModel->get_data($id);
            
            if(!empty($result)){
                $status = $iconModel->update_data($id,$data);
                if($status){
                    $response = [
                        'status' => 200,
                        'message' => 'Icon Data Updated Successfully!',
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
            }

        }
        
    }
}
