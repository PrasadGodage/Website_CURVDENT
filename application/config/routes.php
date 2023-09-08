<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

//--------------------------Login Page UI--------------------------------------------------

$route['dashboard']='admin/NewAdminController/dashboard';

//--------------- Controller UI --------------------------------------

$route['home']='welcome/home';
$route['services']='welcome/services';