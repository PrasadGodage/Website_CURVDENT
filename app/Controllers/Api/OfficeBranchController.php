<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\OfficeBranchModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class OfficeBranchController extends BaseController
{
    use ResponseTrait;
    public function getOfficeBranch($id=0)
    {
        $officeBranchModel = new OfficeBranchModel();

        // Fetch all products from the database
       $data = $officeBranchModel->get_all_data($id);
        //$data = $officeBranchModel->findAll();

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

    public function postOfficeBranch()
    {
        $officeBranchModel = new OfficeBranchModel();
              
        $data = [
            'office_type_id' => $this->request->getVar('office_type_id'),
            'office_name' => $this->request->getVar('office_name'),
            'address' => $this->request->getVar('address'),
            'country_id' => $this->request->getVar('country_id'),
            'state_id' => $this->request->getVar('state_id'),
            'city_id' => $this->request->getVar('city_id'),
            'area_id' => $this->request->getVar('area_id'),
            'pincode' => $this->request->getVar('pincode'),
            'hod_id' => $this->request->getVar('hod_id'),
            'contact_number1' => $this->request->getVar('contact_number1'),
            'contact_number2' => $this->request->getVar('contact_number2'),
            'email_id' => $this->request->getVar('email_id'),
            
        ];
       
        $id = $this->request->getPost('id');
        //print_r( $id);
            
        if(empty($id)){

            $data['created_by'] = $this->request->getVar('created_by');
                                                       
            $result= $officeBranchModel->save($data);

            if(!empty($result)){
                
                $response = [
                    'status' => 200,
                    'message' => 'officeBranch Data Created Successfully!',
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
            $result = $officeBranchModel->get_all_data($id);
            $data['created_by'] = $this->request->getVar('created_by');            
            // $result= $admin->save($data);
            $status = $officeBranchModel->update_officeBranch($id,$data);

            if(!empty($status)){
                
                $response = [
                    'status' => 200,
                    'message' => 'officeBranch Data Updated Successfully!',
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
