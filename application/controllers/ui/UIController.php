<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class UIController extends CI_Controller {
      

    public function home() {        
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('ui/home/home');
        $this->load->view('ui/aboutUs/aboutUs');
        $this->load->view('ui/contact/contact');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
    public function admin() {        
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('services/services');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
  
    
}
