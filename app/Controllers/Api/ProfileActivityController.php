<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\ProfileActivityModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class ProfileActivityController extends BaseController
{
    use ResponseTrait;
    
    public function getProfileActivity($id=0)
    {
        $profileActivityModel = new ProfileActivityModel();

        // Fetch all products from the database
        // $data = $profileActivityModel->findAll();
        $data = $profileActivityModel->get_all_data($id);

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

    public function postProfileActivity()
    {
        $profileActivityModel = new ProfileActivityModel();

        // $data = $this->request->getVar('uname');
        // $data = $this->request->getVar('password');
        $data = [
            'activity_id' => $this->request->getVar('activity_id'),
            'profile_id' => $this->request->getVar('p_id'),
        ];

        $id = $this->request->getPost('id');

        if(empty($id)){

            $result= $profileActivityModel->save($data);
    
            if(!empty($result)){
                
                $response = [
                    'status' => 200,
                    'message' => 'Profile Activity Created Successfully!',
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
            $result = $profileActivityModel->get_all_data($id);

            if($result){
                $status = $profileActivityModel->update_data($id,$data);

                if(!empty($status)){
                
                    $response = [
                        'status' => 200,
                        'message' => 'Profile Activity Updated Successfully!',
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

    public function deleteProfileActivity($activityid,$profileid){

        $profileActivityModel = new ProfileActivityModel();

        $result = $profileActivityModel->delete_profile_activity($activityid,$profileid);

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
