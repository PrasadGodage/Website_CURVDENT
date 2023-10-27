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
    protected $profileActivityControlPermissionModel;

    public function __construct()
    {
        $this->employeeLoginModel = new EmployeeLoginModel();
        $this->profileRoleModel = new ProfileRoleModel();
        $this->profileTabModel = new ProfileTabModel();
        $this->profileActivityModel = new ProfileActivityModel();
        $this->profileActivityControlPermissionModel = new ProfileActivityControlPermissionModel();
    }

    public function login_auth()
    {
        $data['userid'] = $this->request->getPost('userid');
        $data['password'] = $this->request->getPost('password');
        // Now you can use $userID and $password in your code
        $empDetails = $this->employeeLoginModel->get_authenticate($data);
        echo "<pre>";
        print_r($empDetails);

    }
}
