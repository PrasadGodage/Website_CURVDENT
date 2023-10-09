<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class SendEmailController extends CI_Controller {
      
    
    public function __construct() {

        parent::__construct();
        // $this->load->library('email'); 
        $this->load->helper('url');
        $this->load->library('email');
        
    }
   
    public function sendMail_post() {  
        
        $response = [];

        $subject = 'Application for Clinc By - ' . $this->input->post("name");
        // $programming_languages = implode(", ", $this->input->post("programming_languages"));

        $message = '
                    <h3 align="center">Client Details</h3>
                        <table border="1" width="100%" cellpadding="5">
                            <tr>
                            <td width="30%">Name</td>
                            <td width="70%">'.$this->input->post("name").'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Email Address</td>
                            <td width="70%">'.$this->input->post("email").'</td>
                            </tr>
                            
                            <tr>
                            <td width="30%">Phone Number</td>
                            <td width="70%">'.$this->input->post("phone").'</td>
                            </tr>

                            <tr>
                            <td width="30%">Message</td>
                            <td width="70%">'.$this->input->post("message").'</td>
                            </tr>
                        </table>
                    ';


        // $name = $this->input->post('name');
        // $email = $this->input->post('email');
        // $phone = $this->input->post('phone');
        // $subject = $this->input->post('subject');
        // $message = $this->input->post('message');
        
        // $emailContent = 'Phone Number: ' . $phone . "\n\n" . 'Message: ' . $message;
        // $subject = " NewsLetter send ";
        // $this->input->post("title");
        // 
        // $file_data = $this->upoload_file();
        
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

        $this->email->from($this->input->post("email"));
        $this->email->to('pradyumnb.297@gmail.com');
        $this->email->subject($subject);
        $this->email->message($message);
        print_r($this->email->print_debugger());

        
        // $this->load->library('email', $config);
        
        // $this->email->from($this->input->post("email"));
        // // $this->email->from($email);
        // $this->email->to("soulsoft.urmila@gmail.com");
        // $this->email->subject($subject);
        // // $this->email->message($message);
        // $this->email->message($emailContent);
        // $this->email->set_newline("\r\n");
        // $this->email->send();

        if (!$this->email->send()) {
            $response['msg'] = 'Email Send Successfully!';
            $response['status'] = 200;
            $this->response($response, REST_Controller::HTTP_OK);
        }else {
            $response['msg'] = 'Bad Request!';
            $response['status'] = 400;
            $this->response($response, REST_Controller::HTTP_BAD_REQUEST);
          }
        // $this->email->attach($file_data['full_path']);
        
        // if($this->email->send()){
        //     if(delete_files($file_data['file_path']))
        //     {
        //         $this->session->set_flashdata('message', 'Application Sended');
                
        //     }
        // }
    }

    // public function upoload_file(){

        //     $config['upload_path']   = './uploads/'; // Same as in the config file
        //     $config['allowed_types'] = 'pdf';
        //     $this->load->library('upload', $config);

        //      if ($this->upload->do_upload('PDF')) {
        //         // Upload successful, you can do further processing here
        //         $data = $this->upload->data();
        // }
    
    // }
}