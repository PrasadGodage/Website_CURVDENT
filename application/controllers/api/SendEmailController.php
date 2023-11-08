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
                
        $subscriber['email'] = $this->post('mail');
        // $sub = $this->post('name');
        
        $data['name'] = $this->post('fname');
        $data['email'] = $this->post('mail');
        $data['number'] = $this->post('mobile');
        $data['subject'] = $this->post('sub');
        $data['message'] = $this->post('msg');
        $data['is_newsletter'] = 0;
        
        $id = $this->post('id');
                
        $emailContent = '
                    <h3 align="center">Client Details</h3>
                        <table border="1" width="100%" cellpadding="5">
                            <tr>
                            <td width="30%">Name</td>
                            <td width="70%">'.$data['name'].'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Email Address</td>
                            <td width="70%">'.$data['email'].'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Phone Number</td>
                            <td width="70%">'.$data['number'].'</td>
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
            'smtp_user'   =>   'info@curvdent.com',
            'smtp_pass'   =>   'Curvdent@2023',
            'mailtype'   =>   'html',
            'charset'   =>   'utf-8',
            'wordwrap'   =>   TRUE
            
        );
        
        $this->email->initialize($config);

        $this->email->set_newline("\r\n");

        $this->email->from($data['email']);
        $this->email->to('info@curvdent.com');
        $this->email->subject($data['subject']);
        // $this->email->subject($subject);
        $this->email->message($emailContent);
        
        $Mailstatus = $this->email->send();
        if(empty($id)){
            $status = $this->newsletter->insert_newsletter($data);
            
            if ($Mailstatus) {
                $response['msg'] = 'Email Send Successfully!';
                // $response['msg'] = $status;
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            }else {
                $response['msg'] = 'Bad Request!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            }

        }else{
            $status = $this->newsletter->insert_newsletter($subscriber);
            
            if ($Mailstatus) {
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

    public function sendPostMail_post() {  
        
        $response = [];
        //$email = [];
        $arrJson = json_decode($this->post('emailDetails'));
        $pdf=$this->post('pdfFileName');
        print_r($pdf_path);
         $Mailstatus;

       
           
            for($i=0 ; $i < count($arrJson) ; $i++){

                $data['email'] = $arrJson[$i]->email;  
                $pdf_path = FCPATH . 'uploads/' . $pdf;
         
        $config=array(
            
            'protocol'   =>   'sendmail',
            'smtp_host'   =>   'ssl://smtp.gmail.com',
            'smtp_port'   =>   465,
            'smtp_user'   =>   'info@curvdent.com',
            'smtp_pass'   =>   'Curvdent@2023',
            'mailtype'   =>   'html',
            'charset'   =>   'utf-8',
            'wordwrap'   =>   TRUE
            
        );

        
        $this->email->initialize($config);

        //$recipients=array('soulsoft.urmila@gmail.com','soulsoft.gauravvanam@gmail.com','soulsoft.krishna@gmail.com');

        $this->email->set_newline("\r\n");

        $this->email->from('info@curvdent.com');
        $this->email->to($data['email']);
        
        $this->email->subject('Our Latest NewsLetter');
        $this->email->message('Our Latest NewsLetter');


       
        $this->email->attach($pdf_path);
        $Mailstatus = $this->email->send();

    }
                    
            if ($Mailstatus) {
                $response['msg'] = 'Email Send Successfully!';
                // $response['msg'] = $status;
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            }else {
                $response['msg'] = 'Bad Request!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            }
                    
        
    }


    public function sendSubscriber_post() {  
        
        $response = [];
        //$email = [];
        $arrJson = json_decode($this->post('chkList'));
        $pdf=$this->post('pdf');
                
         $Mailstatus;
                
            for($i=0 ; $i < count($arrJson) ; $i++){

                $data['email'] = $arrJson[$i]->email;  
                //$pdf_path = FCPATH . 'uploads/' . $pdf;
                $pdf_path = FCPATH . $pdf;
         
        $config=array(
            
            'protocol'   =>   'sendmail',
            'smtp_host'   =>   'ssl://smtp.gmail.com',
            'smtp_port'   =>   465,
            'smtp_user'   =>   'info@curvdent.com',
            'smtp_pass'   =>   'Curvdent@2023',
            'mailtype'   =>   'html',
            'charset'   =>   'utf-8',
            'wordwrap'   =>   TRUE
            
        );

        
        $this->email->initialize($config);

        //$recipients=array('soulsoft.urmila@gmail.com','soulsoft.gauravvanam@gmail.com','soulsoft.krishna@gmail.com');

        $this->email->set_newline("\r\n");

        $this->email->from('info@curvdent.com');
        $this->email->to($data['email']);
        
        $this->email->subject('Our Latest NewsLetter');
        $this->email->message('Our Latest NewsLetter');


        $this->email->attach($pdf_path);
        $Mailstatus = $this->email->send();

    }
                    
            if ($Mailstatus) {
                $response['msg'] = 'Email Send Successfully!';
                // $response['msg'] = $status;
                $response['status'] = 200;
                $this->response($response, REST_Controller::HTTP_OK);
            }else {
                $response['msg'] = 'Bad Request!';
                $response['status'] = 400;
                $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
            }
                    
        
    }



}