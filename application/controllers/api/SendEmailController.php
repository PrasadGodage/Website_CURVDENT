<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class SendEmailController extends REST_Controller {
      
    
    public function __construct() {

        parent::__construct();
        $this->load->library('email');
        $this->load->helper('url');
        $this->load->model('NewsletterModel','newsletter');
        
    }
   
    public function sendMail_post() {  
        
        $response = [];
        // $mailData = [];
        // $jsonData = json_decode($jsonString, true);
        // echo "<pre>"
        // print_r($jsonData);
        // $json_data = $this->input->raw_input_stream;

        // Decode the JSON data into an array
        // $data = json_decode($json_data, true);
        // $data = $this->post();

        
        $subscriber['email'] = $this->post('mail');
        // $sub = $this->post('name');
        
        $data['firstName'] = $this->post('fname');
        $data['email'] = $this->post('mail');
        $data['phone'] = $this->post('mobile');
        $data['subject'] = $this->post('sub');
        $data['message'] = $this->post('msg');
        
        $id = $this->post('id');
        // echo "<pre>";
        // print_r($data);
        // print_r($id);
        
        $emailContent = '
                    <h3 align="center">Client Details</h3>
                        <table border="1" width="100%" cellpadding="5">
                            <tr>
                            <td width="30%">Name</td>
                            <td width="70%">'.$data['firstName'].'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Email Address</td>
                            <td width="70%">'.$data['email'].'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Phone Number</td>
                            <td width="70%">'.$data['phone'].'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Message</td>
                            <td width="70%">'.$data['message'].'</td>
                            </tr>
                        </table>
                    ';


        $config=array(
            
            'protocol'   =>   'sendmail',
            'smtp_host'   =>   'ssl://smtp.gmail.com',
            'smtp_port'   =>   465,
            'smtp_user'   =>   'pradyumnb.297@gmail.com',
            'smtp_pass'   =>   'Pradyumn@1998',
            'mailtype'   =>   'html',
            'charset'   =>   'utf-8',
            'wordwrap'   =>   TRUE
            
        );
        
        $this->email->initialize($config);

        $this->email->set_newline("\r\n");

        $this->email->from($data['email']);
        $this->email->to('pradyumnb.297@gmail.com');
        $this->email->subject($data['subject']);
        // $this->email->subject($subject);
        $this->email->message($emailContent);
        // print_r($this->email->print_debugger());

        
        // $this->load->library('email', $config);
        
        // $this->email->from($this->input->post("email"));
        // // $this->email->from($email);
        // $this->email->to("soulsoft.urmila@gmail.com");
        // $this->email->subject($subject);
        // // $this->email->message($message);
        // $this->email->message($emailContent);
        // $this->email->set_newline("\r\n");
        $Mailstatus = $this->email->send();
        if(empty($id)){
            $status = $this->newsletter->insert_newsletter($subscriber);
            
            if ($Mailstatus) {
                $response['msg'] = 'Email Send Successfully!';
                $response['msg'] = $status;
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            }else {
                $response['msg'] = 'Bad Request!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            }

        }else{
            $newsletter_id = $this->newsletter->insert_newsletter($subscriber);
            
            if ($status) {
                $response['msg'] = 'Email Send Successfully!';
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            }else {
                $response['msg'] = 'Bad Request!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            }

        }
        
    }


}