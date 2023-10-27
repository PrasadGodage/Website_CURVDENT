<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Super extends BaseController
{
    public function index()
    {
        return view("super/login");
    }

    public function dashboard()
    {
        return view("super/header")
            . view('super/side_bar')
            . view('super/dashboard/dashboard')
            . view('super/footer')
            . view('super/htmlend');
    }

    public function tab()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/tab/tab')
            . view('super/tab/add_tab')
            . view('super/footer')
            . view('super/tab/tab_js')
            . view('super/htmlend');
    }

    public function activity()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/activity/activity')
            . view('super/activity/modal/add_activity')
            . view('super/activity/modal/activity_control')
            . view('super/activity/modal/edit-activity-control')
            . view('super/footer')
            . view('super/activity/activity_js')
            . view('super/htmlend');
    }

    public function role()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/role_master/role')
            . view('super/role_master/modal/add_role')
            . view('super/footer')
            . view('super/role_master/role_js')
            . view('super/htmlend');
    }

    public function profile()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/profile/modal/add_profile')
            . view('super/profile/profile')
            . view('super/footer')
            . view('super/profile/profile_js')
            . view('super/htmlend');
    }

    public function profileDetails()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/profile/modal/add_profile')
            . view('super/profile/modal/add_tab')
            . view('super/profile/modal/add_activity')
            . view('super/profile/modal/add_role')
            . view('super/profile/modal/activity_permission')
            . view('super/profile/profile_details')
            . view('super/footer')
            . view('super/profile/profile_details_js')
            . view('super/htmlend');
    }


    public function officeType()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/office/office_type/office_type')
            . view('super/office/office_type/modal/add_office_type')
            . view('super/footer')
            . view('super/office/office_type/office_type_js')
            . view('super/htmlend');
    }

    public function officeBranch()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/office/office_branch/office_branch')
            . view('super/office/office_branch/modal/add_office_branch')
            . view('super/footer')
            . view('super/office/office_branch/office_branch_js')
            . view('super/htmlend');
    }

    public function country()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/country/country')
            . view('super/country/modal/add_country')
            . view('super/footer')
            . view('super/country/country_js')
            . view('super/htmlend');
    }

    public function countryDetails()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/country/modal/add_country')
            . view('super/country/modal/add_state')
            . view('super/country/modal/add_city')
            . view('super/country/country_details')
            . view('super/footer')
            . view('super/country/country_details_js')
            . view('super/htmlend');
    }

    public function employee()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('employee/employee')
            . view('employee/modal/add_employee')
            . view('super/footer')
            . view('employee/employee_js')
            . view('super/htmlend');
    }

    public function icon()
    {
        return view('super/header')
            . view('super/side_bar')
            . view('super/icon/icon')
            . view('super/icon/modal/add_icon')
            . view('super/footer')
            . view('super/icon/icon_js')
            . view('super/htmlend');
    }

}
