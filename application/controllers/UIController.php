<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class UIController extends CI_Controller {
      

    public function index(){
        $this->home();
    }
    public function home() {        
        $this->load->view('ui/header');
        $this->load->view('ui/home/home');
        $this->load->view('ui/footer');
    }
    
}