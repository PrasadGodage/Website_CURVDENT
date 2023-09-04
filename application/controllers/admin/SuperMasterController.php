<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
class SuperMasterController extends CI_Controller {

    public function superLogin()
    {
        $this->load->view('super/login/login');
    }

    public function dashboard()
    {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/dashboard/dashboard');
        $this->load->view('super/footer');
        $this->load->view('super/htmlend');
    }

    public function tab()
    {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/tab/tab');
        $this->load->view('super/tab/add_tab');
        $this->load->view('super/footer');
        $this->load->view('super/tab/tab_js');
        $this->load->view('super/htmlend');
    }

    public function activity()
    {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/activity/activity');
        $this->load->view('super/activity/modal/add_activity');
        $this->load->view('super/activity/modal/activity_control');
        $this->load->view('super/activity/modal/edit-activity-control');
        $this->load->view('super/footer');
        $this->load->view('super/activity/activity_js');
        $this->load->view('super/htmlend');
    }

    public function role() {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/role_master/role');
        $this->load->view('super/role_master/modal/add_role');
        $this->load->view('super/footer');
        $this->load->view('super/role_master/role_js');
        $this->load->view('super/htmlend');
    }
    
    public function profile() {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/profile/modal/add_profile');
        $this->load->view('super/profile/profile');
        $this->load->view('super/footer');
        $this->load->view('super/profile/profile_js');
        $this->load->view('super/htmlend');
    }

    public function profileDetails() {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/profile/modal/add_profile');
        $this->load->view('super/profile/modal/add_tab');
        $this->load->view('super/profile/modal/add_activity');
        $this->load->view('super/profile/modal/add_role');
        $this->load->view('super/profile/modal/activity_permission');
        $this->load->view('super/profile/profile_details');
        $this->load->view('super/footer');
        $this->load->view('super/profile/profile_details_js');
        $this->load->view('super/htmlend');
    }


    public function officeType() {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('office/office_type/office_type');
        $this->load->view('office/office_type/modal/add_office_type');
        $this->load->view('super/footer');
        $this->load->view('office/office_type/office_type_js');
        $this->load->view('super/htmlend');
    }
     
    public function officeBranch(){
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('office/office_branch/office_branch');
        $this->load->view('office/office_branch/modal/add_office_branch');
        $this->load->view('super/footer');
        $this->load->view('office/office_branch/office_branch_js');
        $this->load->view('super/htmlend');
    }

    public function country(){
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/country/country');
        $this->load->view('super/country/modal/add_country');
        $this->load->view('super/footer');
        $this->load->view('super/country/country_js');
        $this->load->view('super/htmlend');
    }

    public function countryDetails() {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/country/modal/add_country');
        $this->load->view('super/country/modal/add_state');
        $this->load->view('super/country/modal/add_city');
        $this->load->view('super/country/country_details');
        $this->load->view('super/footer');
        $this->load->view('super/country/country_details_js');
        $this->load->view('super/htmlend');
    }

    public function employee(){
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('employee/employee');
        $this->load->view('employee/modal/add_employee');
        $this->load->view('super/footer');
        $this->load->view('employee/employee_js');
        $this->load->view('super/htmlend');       
    }

    public function icon()
    {
        $this->load->view('super/header');
        $this->load->view('super/side_bar');
        $this->load->view('super/icon/icon');
        $this->load->view('super/icon/modal/add_icon');
        $this->load->view('super/footer');
        $this->load->view('super/icon/icon_js');
        $this->load->view('super/htmlend');
    }
    
}