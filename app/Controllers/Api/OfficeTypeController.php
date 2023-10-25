<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\OfficeTypeModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class OfficeTypeController extends BaseController
{
    use ResponseTrait;

    
    public function getOfficeType($id=0)
    {
        $officeModel = new OfficeTypeModel();

        // Fetch all products from the database
        $data = $officeModel->findAll();

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

    public function postOfficeType()
    {
        $officeModel = new OfficeTypeModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'type' => $this->request->getVar('type'),
                     
        ];
        $result= $officeModel->save($data);

        if(!empty($result)){
            
            $response = [
                'status' => 200,
                'message' => 'Role Data Created Successfully!',
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
