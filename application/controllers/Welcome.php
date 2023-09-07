<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->home();
	}

    public function home() {        
        $this->load->view('ui/header');
        $this->load->view('ui/home/home');
        $this->load->view('ui/footer');
    }

    public function aboutUs() {        
        $this->load->view('ui/header');
        $this->load->view('ui/aboutUs/aboutUs');
        $this->load->view('ui/footer');
    }
    
	public function contact() {        
        $this->load->view('ui/header');
        $this->load->view('ui/contact/contact');
        $this->load->view('ui/footer');
    }
    
	public function services() {        
		$this->load->view('ui/header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('admin/services/services');
        $this->load->view('ui/footer');
    }
}
