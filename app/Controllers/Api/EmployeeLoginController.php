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
            'email_id' => $this->request->getVar('uname'),
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


    public function forgate_password_link_sendmail_post()
    {
        $response = [];

        $userid = $this->request->getPost('email');
        $row = $this->employeeLoginModel->send_mail($userid);

        if ($row['status']) {
            $fromEmail = "support@soulsoftinfotech.in";
            $toEmail = $userid;
            $link = base_url() . "resetpassword?key=" . $userid . "&token=" . $row['token'];

            // Load email library
            $email = \Config\Services::email();
            $email->setFrom($fromEmail, 'Soulsoft');
            $email->setTo($toEmail);
            $email->setSubject('Reset Password Link');
            $email->setMessage($link);

            // Send mail
            if ($email->send()) {
                $response = [
                    'Message' => 'Mail is sent to your email id please reset your password',
                    'Responsecode' => 200
                ];
                return $this->response->setJSON($response);
            } else {
                $response = [
                    'Message' => 'Problem with Mail sent, please try again later',
                    'Responsecode' => 400
                ];
                return $this->response->setJSON($response);
            }
        } else {
            $response = [
                'Message' => 'Email id is not registered',
                'Responsecode' => 204
            ];
            return $this->response->setJSON($response);
        }
    }

}