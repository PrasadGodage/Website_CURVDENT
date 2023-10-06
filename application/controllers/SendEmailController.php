<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class SendEmailController extends CI_Controller {
      

    public function index(){
        $this->home();
    }
    public function home() {  
        
        $subject = " NewsLetter send ";
        $this->input->post("title");
        
        $file_data = $this->upoload_file();

        $config=array(

            'protocol'   =>   'smtp',
            'smtp_host'   =>   'smtpuot.secureserver.net',
            'smtp_port'   =>   80,
            'smtp_user'   =>   '****',
            'smtp_pass'   =>   '****',
            'mailtype'   =>   'html',
            'charset'   =>   'iso-8859-1',
            'wordwrap'   =>   TRUE
                        
        );

        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->from($this->input->post("email"));
        $this->email->to("soulsoft.urmila@gmail.com");
        $this->email->subject($subject);
        $this->email->message($message);
        $this->email->attach($file_data['full_path']);
        
        if($this->email->send()){
            if(delete_files($file_data['file_path']))
            {
                $this->session->set_flashdata('message', 'Application Sended');
                
            }
        }
    }

    public function upoload_file(){

        $config['upload_path']   = './uploads/'; // Same as in the config file
        $config['allowed_types'] = 'pdf';
        $this->load->library('upload', $config);

         if ($this->upload->do_upload('PDF')) {
            // Upload successful, you can do further processing here
            $data = $this->upload->data();
    }
    
}
}