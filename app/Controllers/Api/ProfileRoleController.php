<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\ProfileRoleModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class ProfileRoleController extends BaseController
{
    use ResponseTrait;

    public function getProfile_role($id = 0)
    {
        $profileRoleModel = new ProfileRoleModel();

        // Fetch all products from the database
        // $data = $tabModel->findAll();
        $data = $profileRoleModel->get_all_data($id);

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

    public function postProfile_role()
    {
        $profileRoleModel = new ProfileRoleModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'role_id' => $this->request->getVar('role_id1'),
            'profile_id' => $this->request->getVar('profile_id'),
            
        ];
        $result= $profileRoleModel->save($data);

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

    }

    public function deleteProfile_role($id = 0){

        $profileRoleModel = new ProfileRoleModel();

        $result = $profileRoleModel->delete_data($id);

        if (!empty($result)) {
            $response = [
                'status' => 200,
                'message' => 'All Data Deleted successfully!',
                'data' => $result
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
}
