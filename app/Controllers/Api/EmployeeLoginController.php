<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\EmployeeLoginModel;
use App\Models\ProfileRoleModel;
use App\Models\ProfileTabModel;
use App\Models\ProfileActivityModel;
use App\Models\ProfileActivityControlPermissionModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class EmployeeLoginController extends BaseController
{

    use ResponseTrait;

    protected $employeeLoginModel;
    protected $profileRoleModel;
    protected $profileTabModel;
    protected $profileActivityModel;
    protected $permissionModel;

    public function __construct()
    {
        $this->employeeLoginModel = new EmployeeLoginModel();
        $this->profileRoleModel = new ProfileRoleModel();
        $this->profileTabModel = new ProfileTabModel();
        $this->profileActivityModel = new ProfileActivityModel();
        $this->permissionModel = new ProfileActivityControlPermissionModel();
    }

    public function login_auth()
    {

        $this->employeeLoginModel = new EmployeeLoginModel();

        $data = [
            'userid' => $this->request->getVar('userid'),
            'password' => $this->request->getVar('password'),
        ];
        
        
        $empDetails = $this->employeeLoginModel->get_authenticate($data);
        
        if (!empty($empDetails)) {
            $rolePermission=$this->profileRoleModel->get_all_data($empDetails['profile_id']);
            $tabPermission=$this->profileTabModel->get_all_data($empDetails['profile_id'],1);
            $activityPermission=$this->profileActivityModel->get_all_data($empDetails['profile_id']);
            $activityContorlPermission = $this->permissionModel->get_all_data($empDetails['profile_id']);

            $response = [
                'msg' => 'user login successfully!',
                'empdetails' => $empDetails,
                'type' => 'employee',
                'role' => $rolePermission,
                'tab' => $tabPermission,
                'activity' => $activityPermission,
                'activityControls' => $activityContorlPermission,
                'url' => base_url(),
                'status' => 200
            ];
            
            return $this->response->setJSON($response);            
            
        }else {
            $response = [
                'status' => 400,
                'message' => 'incorrect userid or password!'
            ];
            return $this->response->setJSON($response);
        }
    }

}