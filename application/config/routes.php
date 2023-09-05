<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'ui/UIController/home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


//--------------- Controller UI --------------------------------------

$route['home']='ui/UIController/home';