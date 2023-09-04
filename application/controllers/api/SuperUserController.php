<?php
defined('BASEPATH') OR exit('No direct script access allowed');


/**
 * SuperUser class.
 * 
 * @extends REST_Controller
 */
    require(APPPATH.'/libraries/REST_Controller.php');
    use Restserver\Libraries\REST_Controller;

class SuperUserController extends REST_Controller {

	/**
	 * __construct function.
	 * 
	 * @access public
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
        $this->load->library('Authorization_Token');
		$this->load->model('SuperUserModel');
	}

	/**
	 * register function.
	 * 
	 * @access public
	 * @return void
	 */
	public function register_post() {

		// set validation rules
		$this->form_validation->set_rules('uname', 'Uname', 'trim|required|valid_email|is_unique[super_master.uname]', array('is_unique' => 'This username already exists. Please choose another one.'));
		//$this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|is_unique[super_master.email]');
		$this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[6]');
		//$this->form_validation->set_rules('password_confirm', 'Confirm Password', 'trim|required|min_length[6]|matches[password]');
		
		if ($this->form_validation->run() === false) {
			
			// validation not ok, send validation errors to the view
            $this->response(['msg'=>'Validation rules violated','error'=>$this->form_validation->error_array()], REST_Controller::HTTP_OK);
			
		} else {
			
			// set variables from the form
			$username = $this->input->post('uname');
			$password = $this->input->post('password');
			
			if ($res = $this->SuperUserModel->create_user($username, $password)) {
				
				// user creation ok
                $token_data['uid'] = $res; 
                $token_data['userid'] = $username;
                $tokenData = $this->authorization_token->generateToken($token_data);
							
                $final = array();
                $final['access_token'] = $tokenData;
                $final['status'] = true;
                $final['uid'] = $res;
                $final['message'] = 'Thank you for registering your new account!';
                $final['note'] = 'You have successfully register. Please check your email inbox to confirm your email address.';

                $this->response($final, REST_Controller::HTTP_OK); 

			} else {
				
				// user creation failed, this should never happen
                $this->response(['There was a problem creating your new account. Please try again.'], REST_Controller::HTTP_OK);
			}
			
		}
		
	}
		
	/**
	 * login function.
	 * 
	 * @access public
	 * @return void
	 */
	public function login_post() {
		
		// set validation rules
		$this->form_validation->set_rules('uname', 'Uname', 'trim|required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required');
		
		if ($this->form_validation->run() == false) {
			
			// validation not ok, send validation errors to the view
            $this->response(['Validation rules violated'], REST_Controller::HTTP_OK);

		} else {
			
			// set variables from the form
			$username = $this->input->post('uname');
			$password = $this->input->post('password');
			
			if ($this->SuperUserModel->resolve_user_login($username, $password)) {
				
				$user_id = $this->SuperUserModel->get_user_id_from_username($username);
				$user    = $this->SuperUserModel->get_user($user_id);
				
				
				// user login ok
                $token_data['uid'] = $user_id;
                $token_data['userid'] = $user->uname; 

				$tokenData = $this->authorization_token->generateToken($token_data);
				            
				// set session user datas
				//$sessionData['username']      = $user->uname;
				//$sessionData['userid']      = $user->id;
				//$sessionData['token']     = $tokenData;
				//$sessionData['logged_in']    = TRUE;

				$sessionData = array(
					'username' => $user->uname,
					'userid' => $user->id,
					'token' => $tokenData,
					'logged_in' => TRUE
				);

				$this->session->set_userdata('SuperLoginSession', $sessionData);

                $response['msg'] = 'user login successfully!';
            	$response['userid']=$user->id;
            	$response['url']= base_url();
            	$response['type']= 'master';
            	$response['token'] = $tokenData;
            	$response['status'] = 200;
            $this->response($response, REST_Controller::HTTP_OK);
			} else {
			$response['msg'] = 'incorrect username or password!';
            $response['status'] = 400;
            $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
				
			}
			
		}
		
	}
	
	/**
	 * logout function.
	 * 
	 * @access public
	 * @return void
	 */
	public function logout_post() {

		if (isset($_SESSION['SuperLoginSession']['logged_in']) && $_SESSION['SuperLoginSession']['logged_in'] === true) {
			
			// remove session datas
			foreach ($_SESSION as $key => $value) {
				unset($_SESSION[$key]);
			}
			
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
