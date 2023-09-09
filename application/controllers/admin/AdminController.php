<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class AdminController extends CI_Controller {

    public function index() {
                 $this->load->view('login');
            }

    public function dashboard() {
        $this->load->view('header');
        $this->load->view('admin/sidebar/side_bar');
        $this->load->view('admin/dashboard/dashboard');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
    
    public function posting() {
        $this->load->view('header');
        $this->load->view('admin/sidebar/side_bar');
        $this->load->view('admin/posting/posting');
        $this->load->view('footer');
        $this->load->view('admin/posting/posting_js');
        $this->load->view('htmlend');
    }
    
    public function category() {
        $this->load->view('header');
        $this->load->view('admin/sidebar/side_bar');
        $this->load->view('admin/category/category');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
        
    
    
}
