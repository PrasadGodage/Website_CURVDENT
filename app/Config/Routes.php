<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

 

$routes->group('super', function ($routes) {
    $routes->get('login', 'Super::index');    
    $routes->get('superDashboard', 'Super::dashboard');    
    $routes->get('superTab', 'Super::tab');    
    $routes->get('superActivity', 'Super::activity');    
    $routes->get('superRole', 'Super::role');    
    $routes->get('superProfile', 'Super::profile');    
    $routes->get('profileDetails/(:num)', 'Super::profileDetails/$1');    
    $routes->get('office_type', 'Super::officeType');    
    $routes->get('officeBranch', 'Super::officeBranch');    
    $routes->get('superCountry', 'Super::country');    
    $routes->get('superCountryDetails/(:num)', 'Super::countryDetails/$1');    
    $routes->get('superEmployee', 'Super::employee');    
    $routes->get('superIcon', 'Super::icon');  
    
    
    $routes->post('superUserLogin', 'api\Super::index');      
    $routes->post('register', 'api\Super::register'); 

   
    $routes->get('tab', 'api\TabController::getTab');      
    $routes->get('tab/(:num)', 'api\TabController::getTab/$1');      
    $routes->post('tab', 'api\TabController::postTab');      
    // $routes->get('tab/(:num)', 'api\TabController::getTab/$1'); 
    
    $routes->get('icon', 'api\IconController::getIcon');      
    $routes->get('icon/(:num)', 'api\IconController::getIcon/$1');      
    $routes->post('icon', 'api\IconController::postIcon');   

    $routes->get('activity', 'api\ActivityController::getActivity');      
    $routes->get('activity/(:num)', 'api\ActivityController::getActivity/$1');      
    $routes->post('activity', 'api\ActivityController::postActivity');  
    
    $routes->get('role', 'api\RoleController::getRole');      
    $routes->get('role/(:num)', 'api\RoleController::getRole/$1');      
    $routes->post('role', 'api\RoleController::postRole');
});

$routes->group("api", function ($routes) {
    $routes->post("register", "Register::index");
    $routes->post("login", "Login::index");
    $routes->get("users", "User::index", ['filter' => 'authFilter']);
});