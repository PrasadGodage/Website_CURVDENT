<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\ActivityModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class ActivityController extends BaseController
{
    use ResponseTrait;
    public function getActivity($id=0)
    {
        $activityModel = new ActivityModel();

        // Fetch all products from the database
        $data = $activityModel->get_all_data($id);

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

    public function postActivity()
    {
        $activityModel = new ActivityModel();
       $data = [
            'tab_id' => $this->request->getVar('tab_id'),
            'icon_id' => $this->request->getVar('icon_id'),
            'activity_title' => $this->request->getVar('activity_title'),
            'url' => $this->request->getVar('url'),
            'is_active' => $this->request->getVar('is_active'),
            
        ];
        $id = $this->request->getPost('id');
        print_r( $id);
            
        if(empty($id)){
                                                       
            $result= $activityModel->save($data);

            if(!empty($result)){
                
                $response = [
                    'status' => 200,
                    'message' => 'Activity Data Created Successfully!',
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
            $result = $activityModel->get_all_data($id);
                            
            // $result= $admin->save($data);
            $status = $activityModel->update_activity($id,$data);

            if(!empty($status)){
                
                $response = [
                    'status' => 200,
                    'message' => 'Activity Data Updated Successfully!',
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
