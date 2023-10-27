<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\CountryModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;


class CountryController extends BaseController
{
    use ResponseTrait;
    public function getCountry($id=0)
    {
        $countryModel = new CountryModel();

        // Fetch all products from the database
        $data = $countryModel->findAll();

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

    public function postCountry()
    {
        $countryModel = new CountryModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'country' => $this->request->getVar('country'),                     
        ];
        $result= $countryModel->save($data);

        if(!empty($result)){
            
            $response = [
                'status' => 200,
                'message' => 'Country Data Created Successfully!',
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
