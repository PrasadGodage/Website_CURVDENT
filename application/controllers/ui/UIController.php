<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class UIController extends CI_Controller {
      

    public function home() {        
        $this->load->view('ui/header');
        $this->load->view('ui/home/home');
        $this->load->view('ui/footer');
    }
    
}
