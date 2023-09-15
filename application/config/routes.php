<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//--------------------------Login Page UI--------------------------------------------------

$route['employeeLogin']='admin/AdminController/index';
$route['dashboard']='admin/AdminController/dashboard';
$route['posting']='admin/AdminController/posting';
// $route['addPost']='admin/AdminController/addPost';
$route['addPost/(:num)']='ui/UIController/addPost/$1';
$route['category']='admin/AdminController/category';

//Employee Login and logout api
$route['employee_login']='api/EmployeeLoginController/login_auth';
$route['employeeLogout']='api/EmployeeLoginController/logout';

//--------------- Controller UI --------------------------------------

$route['home']='welcome/home';
$route['services']='welcome/services';
$route['blog']='welcome/blog';


//--------------- Controller API --------------------------------------

//category Api
$route['category_api']='api/CategoryController/category';
$route['category_api/(:num)']='api/CategoryController/category/$1';

//posting Api
$route['posting_api']='api/PostingController/posting';
$route['posting_api/(:num)']='api/PostingController/posting/$1';