<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, OPTIONS");

class AdminController extends CI_Controller {

   
    public function index() {
//		$this->load->view('welcome_message');
        //echo base_url();
        $this->load->view('login');
    }

    
    
    public function dashboard() {
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('dashboard/dashboard');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }

    public function officeType() {
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('office/office_type/office_type');
        $this->load->view('office/office_type/modal/add_office_type');
        $this->load->view('footer');
        $this->load->view('office/office_type/office_type_js');
        $this->load->view('htmlend');
    }

    public function officeBranch(){
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('office/office_branch/office_branch');
        $this->load->view('office/office_branch/modal/add_office_branch');
        $this->load->view('footer');
        $this->load->view('office/office_branch/office_branch_js');
        $this->load->view('htmlend');
    }


    public function employee(){
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('employee/employee');
        $this->load->view('employee/modal/add_employee');
        $this->load->view('footer');
        $this->load->view('employee/employee_js');
        $this->load->view('htmlend');       
    }


    public function country(){
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('super/country/country');
        $this->load->view('super/country/modal/add_country');
        $this->load->view('footer');
        $this->load->view('super/country/country_js');
        $this->load->view('htmlend');
    }

    public function countryDetails() {
        $this->load->view('header');
        $this->load->view('sidebar/side_bar');
        $this->load->view('super/country/modal/add_country');
        $this->load->view('super/country/modal/add_state');
        $this->load->view('super/country/modal/add_city');
        $this->load->view('super/country/country_details');
        $this->load->view('footer');
        $this->load->view('super/country/country_js');
        $this->load->view('super/country/country_details_js');
        $this->load->view('htmlend');
    }

    public function provider() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('provider/show');
        $this->load->view('provider/new');
        $this->load->view('footer');
        $this->load->view('provider/show_js');
        $this->load->view('htmlend');
    }
    public function providerDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('provider/provider_detail');
        $this->load->view('provider/provide_services');
        $this->load->view('provider/new');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
    
    public function customer() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('customer/show');
        $this->load->view('customer/new');
        $this->load->view('footer');
        $this->load->view('customer/show_js');
        $this->load->view('htmlend');
    }
    
    public function customerDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('customer/customer_detail');
        $this->load->view('customer/customer_services');
        $this->load->view('customer/new');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
    
    
    public function countryDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('country/add_country');
        $this->load->view('footer');
        $this->load->view('htmlend');
    }
    
    public function service_category() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('service_category/service_category');
        $this->load->view('service_category/add_category');
        $this->load->view('footer');
        $this->load->view('service_category/show_js');
        $this->load->view('service_category/update_js');
    }
    
    public function service_categoryDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('service_category/add_category');
        $this->load->view('footer');
    }
    public function service() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('service/service');
        $this->load->view('service/add_service');
        $this->load->view('footer');
        $this->load->view('service/show_js');
        $this->load->view('service/update_js');
    }
    
    public function serviceDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('service/add_service');
        $this->load->view('footer');
    }
    public function area() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('area/area');
        $this->load->view('area/add_area');
        $this->load->view('footer');
        $this->load->view('area/show_js');
        $this->load->view('area/update_js');
    }
    
    public function areaDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('area/add_area');
        $this->load->view('footer');
    }
    public function booking() {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('booking/show');
        $this->load->view('booking/new');
        $this->load->view('footer');
        $this->load->view('booking/show_js');
    }
    public function bookingDetail($pid) {
        $this->load->view('header');
        $this->load->view('side_bar');
        $this->load->view('booking/customer_detail');
        $this->load->view('booking/customer_services');
        $this->load->view('booking/new');
        $this->load->view('footer');
    }
    
    
    
    
    
    
}
