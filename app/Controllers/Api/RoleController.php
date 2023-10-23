<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\RoleModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class RoleController extends BaseController
{
    use ResponseTrait;

    
    public function getRole($id=0)
    {
        $roleModel = new RoleModel();

        // Fetch all products from the database
        $data = $roleModel->findAll();

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

    public function postRole()
    {
        $roleModel = new RoleModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'tab_name' => $this->request->getVar('tab_name'),
            'is_subtab' => $this->request->getVar('is_subtab'),
            'icon_id' => $this->request->getVar('icon_id'),
            'is_active' => $this->request->getVar('is_active'),
            
        ];
        $result= $roleModel->save($data);

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
