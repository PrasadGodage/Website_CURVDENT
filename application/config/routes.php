<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'uicontroller';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


//--------------- Controller UI --------------------------------------

$route['home']='UIController/home';