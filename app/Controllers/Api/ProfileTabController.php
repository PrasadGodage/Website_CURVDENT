<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\ProfileTabModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;


class ProfileTabController extends BaseController
{
    use ResponseTrait;

    public function getProfile_tab($id = 0)
    {
        $profileTabModel = new ProfileTabModel();

        // Fetch all products from the database
        // $data = $tabModel->findAll();
        $data = $profileTabModel->get_all_data($id,1);

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

    public function postProfile_tab()
    {
        $profileTabModel = new ProfileTabModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'tab_id' => $this->request->getVar('tab_id'),
            'profile_id' => $this->request->getVar('profile_id'),
            
        ];
        $id = $this->request->getPost('id');

        if(empty($id)){

            $result= $profileTabModel->save($data);
    
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
            $result = $profileTabModel->get_all_data($id);
            if($result){
                
                $status = $profileTabModel->update_data($id,$data);

                if(!empty($status)){

                    $response = [
                        'status' => 200,
                        'message' => 'Tab Data Updated Successfully!',
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

    public function deleteProfile_tab($id = 0){

        $profileTabModel = new ProfileTabModel();

        $result = $profileTabModel->delete_data($id);

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
