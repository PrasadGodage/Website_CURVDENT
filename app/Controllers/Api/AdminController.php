<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\AdminModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class AdminController extends BaseController
{
    use ResponseTrait;

    // public function getAdmin()
    public function getAdmin($id = 0, $flag = 0)
    {
        $admin = new AdminModel();

        // Fetch all products from the database
        // $data = $admin->findAll();
        $data = $admin->get_all_data($id, $flag);
        // echo "<pre>";
        // print_r($id);
        // print_r($flag);
        
        // <?= $lastQuery; 

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

    public function postAdmin()
    {
        $admin = new AdminModel();

        
        $data = [
            'role_id' => $this->request->getVar('role_id'),
            'profile_id' => $this->request->getVar('profile_id'),
            'office_branch_id' => $this->request->getVar('office_branch_id'),
            'name' => $this->request->getVar('name'),
            // 'profile_image' => $this->request->getVar('profile_image'),
            'dob' => $this->request->getVar('dob'),
            'age' => $this->request->getVar('age'),
            'aadhar_no' => $this->request->getVar('aadhar_no'),
            'pancard' => $this->request->getVar('pancard'),
            'password' => $this->request->getVar('password'),
            'address' => $this->request->getVar('address'),
            'city_id' => $this->request->getVar('city_id'),
            'state_id' => $this->request->getVar('state_id'),
            'country_id' => $this->request->getVar('country_id'),
            'area_id' => $this->request->getVar('area_id'),
            'pincode' => $this->request->getVar('pincode'),
            // 'userid' => $this->request->getVar('userid'),
            'contact_number1' => $this->request->getVar('contact_number1'),
            'contact_number2' => $this->request->getVar('contact_number2'),
            'email_id' => $this->request->getVar('email_id'),
            // 'gender' => $this->request->getVar('gender'),
            // 'is_active' => $this->request->getVar('is_active'),
            // 'created_by' => $this->request->getVar('created_by'),
            // 'created_at' => $this->request->getVar('created_at'),
            // 'modified_by' => $this->request->getVar('modified_by'),
            // 'modified_at' => $this->request->getVar('modified_at'),
            
        ];
        // $data['tab_name'] = $this->request->getVar('tab_name');
        // $data['icon_id'] = $this->request->getVar('icon_id');
        $data['is_active'] = ($this->request->getVar('is_active') == 'on' || $this->request->getVar('is_active') == 1) ? 1 : 0;
        $data['is_verified'] = ($this->request->getVar('is_verified') == 'on' || $this->request->getVar('is_verified') == 1) ? 1 : 0;
        
        $id = $this->request->getPost('id');
        
        if(empty($id)){
            
            $data['created_by'] = $this->request->getVar('created_by');
            $img = $this->request->getFile('profile_image');

            if (! $img->hasMoved()) {
                $newName = $img->getRandomName();
                $img->move('resource/img/employee',$newName);
                $filepath = 'resource/img/employee/' . $newName;
                
                $data['profile_image'] = $filepath;
            }
            
            $result= $admin->save($data);

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
            $result = $admin->get_all_data($id, 4);
            
            if($result){
                
                $data['created_by'] = $this->request->getVar('created_by');
                $img = $this->request->getFile('profile_image');
    
                if (! $img->hasMoved()) {
                    
                    $newName = $img->getRandomName();
                    $img->move('resource/img/employee',$newName);
                    $filepath = 'resource/img/employee/' . $newName;
                    
                    $data['profile_image'] = $filepath;
                    
                }
                
                $status = $admin->update_admin($id,$data);
    
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
}
