<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//--------------------------Login Page UI--------------------------------------------------

$route['employeeLogin']='admin/NewAdminController/index';
$route['dashboard']='admin/NewAdminController/dashboard';

//Employee Login and logout api
$route['employee_login']='api/EmployeeLoginController/login_auth';
$route['employeeLogout']='api/EmployeeLoginController/logout';

//--------------- Controller UI --------------------------------------

$route['home']='welcome/home';
$route['services']='welcome/services';


//--------------- Controller API --------------------------------------

//category Api

$route['category_api']='api/CategoryController/category';
$route['category_api/(:num)']='api/CategoryController/category/$1';