<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\CityModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;



class CityController extends BaseController
{
    use ResponseTrait;
    public function getCity($id=0)
    {
        $cityModel = new CityModel();

        // Fetch all products from the database
        $data = $cityModel->get_all_data($id,0);

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

    public function getStateCity($id=0)
    {
        $cityModel = new CityModel();

        // Fetch all products from the database
        $data = $cityModel->get_all_data($id,2);

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

    public function postCity()
    {
        $cityModel = new CityModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'country_id' => $this->request->getVar('country_id'),
            'state_id' => $this->request->getVar('state_id'),
            'city' => $this->request->getVar('city'),                     
        ];
        $result= $cityModel->save($data);

        if(!empty($result)){
            
            $response = [
                'status' => 200,
                'message' => 'City Data Created Successfully!',
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
