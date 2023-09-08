<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class NewAdminController extends CI_Controller {

   
    public function index() {
//		$this->load->view('welcome_message');
        //echo base_url();
        $this->load->view('login');
    }

    
    
    public function dashboard() {
        $this->load->view('header');
        // $this->load->view('sidebar/side_bar');
        // $this->load->view('dashboard/dashboard');
        // $this->load->view('footer');
        $this->load->view('htmlend');
    }

        
    
    
    
    
}
