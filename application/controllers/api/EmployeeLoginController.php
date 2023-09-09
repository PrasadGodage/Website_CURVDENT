<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class EmployeeLoginController extends REST_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->library('Authorization_Token');
        $this->load->model('EmployeeLoginModel', 'login');
        $this->load->model('ProfileRoleModel', 'role');
        $this->load->model('ProfileTabModel', 'tab');
        $this->load->model('ProfileActivityModel', 'activity');
        $this->load->model('ProfileActivityControlPermissionModel', 'permission');
    }

    public function login_auth_post() {
        $response = [];
        
        $data['userid'] = $this->post('userid');
        $data['password'] = $this->post('password');

        $empDetails = $this->login->get_authenticate($data);
        if (!empty($empDetails)) {
        

            $tokenData['id']=$empDetails['id'];
            $tokenData['name']=$empDetails['name'];
            //$tokenData['time']=mdate('%Y-%m-%d %H:%i:%s', now());
            
            $jwtToken = $this->authorization_token->generateToken($tokenData);

           
//          set session  
            $sessionData = array(
                'username' => $empDetails['name'],
                'userid' => $empDetails['userid'],
                'image' => $empDetails['profile_image'],
                'token' => $jwtToken,
                'logged_in' => TRUE
            );
           $this->session->set_userdata('empSession', $sessionData);
            
//            send response
            $response['msg'] = 'user login successfully!';
            $response['empdetails']=$empDetails;
            $response['url']= base_url();
            $response['token'] = $jwtToken;
            $response['status'] = 200;
            $this->response($response, REST_Controller::HTTP_OK);
        } else {
            $response['msg'] = 'incorrect userid or password!';
            $response['status'] = 400;
            $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function logout_post() {

        if (isset($_SESSION['empSession']['logged_in']) && $_SESSION['empSession']['logged_in'] === true) {
			
			// remove session datas
			foreach ($_SESSION as $key => $value) {
				unset($_SESSION[$key]);
			}
			
			// user logout ok
            $response['msg'] = 'Session Logout Successfully!';
            $response['status'] = 200;
            $this->response($response, REST_Controller::HTTP_OK);
			
		} else {
			
			// there user was not logged in, we cannot logged him out,
			// redirect him to site root
			// redirect('/');
            $this->response(['There was a problem. Please try again.'], REST_Controller::HTTP_OK);	
		}
           
    }

    public function forgate_password_link_sendmail_post() {
        $response = [];

        $userid = $this->post('email');
        $row = $this->login->send_mail($userid);

        if ($row['status']) {
            $from_email = "support@soulsoftinfotech.in";
            $to_email = $userid;
            $link = base_url() . "resetpassword?key=" . $userid . "&token=" . $row['token'];
            //Load email library 
            $this->load->library('email');

            $this->email->from($from_email, 'Soulsoft');
            $this->email->to($to_email);
            $this->email->subject('Reset Password Link');
            $this->email->message($link);

            //Send mail 
            if ($this->email->send()) {
                $response = array(
                    'Message' => 'Mail is sent to your email id please reset your password',
                    'Responsecode' => 200
                );
                $this->response($response, REST_Controller::HTTP_OK);
            } else {
                $response = array(
                    'Message' => 'problem with Mail sent try again some time',
                    'Responsecode' => 400
                );
                $this->response($response, REST_Controller::HTTP_OK);
            }
        } else {
            $response = array(
                'Message' => 'Email id is not registred',
                'Responsecode' => 204
            );
            $this->response($response, REST_Controller::HTTP_OK);
        }
    }

    public function checkemailexpire_get() {
        $email = $this->get('email');
        $token = $this->get('token');
        $row = $this->login->check_link($email, $token);
        $curDate = date("Y-m-d H:i:s");
        if ($row['status']) {
            if ($row['data']->expiry_date >= $curDate) {
                $response = array(
            'Message' => 'check data',
            'Responsecode' => 200
        );
            }
        } else {
            $response = array(
            'Message' => 'check data',
            'Responsecode' => 400
        );
        }
        
        $this->response($response, REST_Controller::HTTP_OK);
    }

}
