<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'UIController/home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


//--------------- Controller UI --------------------------------------

$route['ui']='ui/UIController/home';
$route['admin']='ui/UIController/admin';