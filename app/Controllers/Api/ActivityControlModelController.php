<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\ActivityControlModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class ActivityControlModelController extends BaseController
{
    use ResponseTrait;
    
    public function getActivityControl($id=0)
    {
        $activityControlModel = new ActivityControlModel();

        // Fetch all products from the database
        $data = $activityControlModel->findAll();
        // $data = $activityControlModel->get_all_data($id);

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

    public function postActivityControl()
    {
        $activityControlModel = new ActivityControlModel();

        $data = [
            'activity_id' => $this->request->getVar('activity_id'),
            'control_name' => $this->request->getVar('control_name'),
        ];
        $result= $activityControlModel->save($data);

        if(!empty($result)){
            
            $response = [
                'status' => 200,
                'message' => 'Activity Control Created Successfully!',
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

    public function updateActivityControl()
    {
        $activityControlModel = new ActivityControlModel();
        
        $id = $this->request->getPost('control_id');
        // $activity_id = $this->request->getPost('activity_id');
        $data['control_name'] = $this->request->getPost('c_name');

        $result = $activityControlModel->get_activityControlById($id);
        // echo "<pre>";
        // print_r($result);

        if (!empty($result)) {
            $data['activity_id']=$result['activity_id'];
            $status = $activityControlModel->update_data($id, $data);
            
            if ($status) {
                # code...
                $response = [
                    'status' => 200,
                    'message' => 'Activity Control Updated Successfully!',
                    'data' => $result
                ];
                return $this->response->setJSON($response);
            }
            
        }
        else
        {
            $response = [
                'status' => 404,
                'message' => 'Data not Found!'
            ];
            return $this->response->setJSON($response);

        }

        // $data['control_name'] = $this->request->getPost('c_name');
        // $data = [
        //     'activity_id' => $activity_id,
        //     'control_name' => $control_name,
        // ];


    }

}
