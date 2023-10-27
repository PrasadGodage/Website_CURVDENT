<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\StateModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class StateController extends BaseController
{
    use ResponseTrait;
    public function getState($id=0)
    {
        $stateModel = new StateModel();

        // Fetch all products from the database
        $data = $stateModel->get_all_data($id,0);

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

    public function postState()
    {
        $stateModel = new StateModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'country_id' => $this->request->getVar('country_id'), 
            'state' => $this->request->getVar('state'), 
            'is_active' => $this->request->getVar('is_active'),               
        ];
        $result= $stateModel->save($data);

        if(!empty($result)){
            
            $response = [
                'status' => 200,
                'message' => 'State Data Created Successfully!',
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
