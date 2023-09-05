<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = '';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

/* API */
$route['product'] = 'api/Product';
$route['product/(:any)'] = 'api/Product/$1';
$route['product/(:num)']['PUT'] = 'api/Product/$1';
$route['product/(:num)']['DELETE'] = 'api/Product/$1';
$route['register'] = 'api/User/register';
$route['login'] = 'api/User/login';
$route['logout'] = 'api/User/logout';
$route['reGenToken'] = 'api/Token/reGenToken';


//super master
// ui
$route['superLogin']='admin/SuperMasterController/superLogin';
$route['superDashboard']='admin/SuperMasterController/dashboard';
$route['superTab']='admin/SuperMasterController/tab';
$route['superActivity']='admin/SuperMasterController/activity';
$route['superRole']='admin/SuperMasterController/role';
$route['superProfile']='admin/SuperMasterController/profile';
$route['profileDetails/(:num)']='admin/SuperMasterController/profileDetails/$1';
$route['office_type']='admin/SuperMasterController/officeType';
$route['office_type/(:num)']='admin/SuperMasterController/countryType/$1';
$route['superCountry']='admin/SuperMasterController/country';
$route['superCountryDetails/(:num)']='admin/SuperMasterController/countryDetails/$1';
$route['superOfficeBranch']='admin/SuperMasterController/officeBranch';
$route['superEmployee']='admin/SuperMasterController/employee';
$route['superIcon']='admin/SuperMasterController/icon';

//super master api
$route['superUserRegister'] = 'api/SuperUserController/register';
$route['superUserLogin'] = 'api/SuperUserController/login';
$route['superUserLogout'] = 'api/SuperUserController/logout';


//employee
// ui
//login page ui
$route['default_controller'] = 'welcome';
$route['employeeLogin']='admin/AdminController/index';
$route['dashboard']='admin/AdminController/dashboard';

$route['employeeOfficeType']='admin/AdminController/officeType';
$route['employeeOfficeBranch']='admin/AdminController/officeBranch';
$route['employeeRegistration']='admin/AdminController/employee';
$route['employeeCountry']='admin/AdminController/country';
$route['employeeCountryDetails/(:num)']='admin/AdminController/countryDetails/$1';
//api
//tab
$route['tab']='api/TabController/tab';
$route['tab/(:num)']='api/TabController/tab/$1';
//activity
$route['activity']='api/ActivityController/activity';
$route['activity/(:num)']='api/ActivityController/activity/$1';
//role
$route['role']='api/RoleController/role';
$route['role/(:num)']='api/RoleController/role/$1';
//profile
$route['profile']='api/ProfileController/profile';
$route['profile/(:num)']='api/ProfileController/profile/$1';
$route['profileByRole/(:num)']='api/ProfileController/profileByRole/$1';
//profile Tab
$route['profileTab']='api/ProfileTabController/profile_tab';
$route['deleteProfileTab/(:num)']='api/ProfileTabController/profile_tab_delete/$1';
$route['profileTab/(:num)']='api/ProfileTabController/profile_tab/$1';
//profile Role
$route['profileRole']='api/ProfileRoleController/profile_role';
$route['deleteProfileRole/(:num)']='api/ProfileRoleController/profile_role_delete/$1';
$route['profileRole/(:num)']='api/ProfileRoleController/profile_role/$1';


//profile Activity
$route['profileActivity']='api/ProfileActivityController/profile_activity';
$route['profileActivity/(:num)']='api/ProfileActivityController/profile_activity/$1';
$route['profileActivityDelete/(:num)/(:num)']='api/ProfileActivityController/profile_activity_delete/$1/$2';
// activity control api
$route['activityControl']='api/ActivityControlController/activityControl';
$route['updateActivityControl']='api/ActivityControlController/updateActivityControl';
$route['activityControl/(:num)']='api/ActivityControlController/activityControl/$1';
//profile activity control permissions
$route['profileActivityPermissions']='api/ProfileActivityControlPermissionController/profileActivityPermission';
$route['profileActivityPermissions/(:num)']='api/ProfileActivityControlPermissionController/profileActivityPermission/$1';



//provider ui
$route['provider']='admin/AdminController/provider';
$route['providerDetail/(:num)']='admin/AdminController/providerDetail/$1';

//customer ui
$route['customer']='admin/AdminController/customer';
$route['customerDetail/(:num)']='admin/AdminController/customerDetail/$1';



//service_category ui
$route['service_category']='admin/AdminController/service_category';
$route['service_categoryDetail/(:num)']='admin/AdminController/service_categoryDetail/$1';
//service_list ui
$route['service']='admin/AdminController/service';
$route['serviceDetail/(:num)']='admin/AdminController/serviceDetail/$1';
//area ui
$route['area']='admin/AdminController/area';
$route['areaDetail/(:num)']='admin/AdminController/areaDetail/$1';
//booking ui
$route['booking']='admin/AdminController/booking';
$route['bookingDetail/(:num)']='admin/AdminController/bookingDetail/$1';


//Employee Login and logout api
$route['employee_login']='api/EmployeeLoginController/login_auth';
$route['employeeLogout']='api/EmployeeLoginController/logout';

//office type master
//api
$route['officeType']='api/OfficeTypeController/office_type';
$route['officeType/(:num)']='api/OfficeTypeController/office_type/$1';
//country master
//api
$route['country']='api/CountryController/country';
$route['country/(:num)']='api/CountryController/country/$1';
//state master
//api
$route['state']='api/StateController/state';
$route['state/(:num)']='api/StateController/state/$1';
$route['stateDelete/(:num)']='api/StateController/state_delete/$1';
//city master
//api
$route['city']='api/CityController/city';
$route['city/(:num)']='api/CityController/city/$1';
$route['statecity/(:num)']='api/CityController/stateCity/$1';
//area master
//api
$route['area']='api/AreaController/area';
$route['area/(:num)']='api/AreaController/area/$1';
//office branch master
//api
$route['officeBranch']='api/OfficeBranchController/branch';
$route['officeBranch/(:num)']='api/OfficeBranchController/branch/$1';

//Admin Master 
//api 
$route['employee']='api/AdminController/admin';
$route['employee/(:num)/(:num)']='api/AdminController/admin/$1/$2';

//Icon Master
//api 
$route['icon']='api/IconController/icon';
$route['icon/(:num)']='api/IconController/icon/$1';
/*
//////////////////////////// - SPARK API - //////////////////////////////////////////////////////////////////////////////////////

//--------------- Controller UI --------------------------------------

$route['brand']='ui/UIController/brand';
$route['client']='ui/UIController/client';
$route['product']='ui/UIController/product';
$route['vendor']='ui/UIController/vendor';
$route['purchase']='ui/UIController/purchase';
$route['addPurchase']='ui/UIController/addPurchase';
$route['updatePurchase']='ui/UIController/updatePurchase';
$route['sales']='ui/UIController/sales';
$route['addSales']='ui/UIController/addSales';
$route['inventory']='ui/UIController/inventory';
$route['productIMEI']='ui/UIController/productIMEI';

//---------------- Controller API ------------------------------------------
//client api
$route['client_api']='api/ClientLoginController/client';
$route['client_api/(:num)']='api/ClientLoginController/client/$1';

//------- Brand API ---------------------------------------
$route['brand_api']='api/BrandController/brand';
$route['brand_api/(:num)']='api/BrandController/brand/$1';

//------------Product API-------------------------------------------------
$route['product_api']='api/ProductController/product';
$route['product_api/(:num)']='api/ProductController/product/$1';

//--vendor controller Api
$route['vendor_api']='api/VendorController/vendor';
$route['vendor_api/(:num)']='api/VendorController/vendor/$1';

//------- Purchase API ---------------------------------------
$route['purchase_api']='api/PurchaseController/purchase';
$route['purchase_api/(:num)']='api/PurchaseController/purchase/$1';

//------- Purchase Inventory API ---------------------------------------
$route['inventory_api']='api/InventoryController/inventory';
$route['inventory_api/(:num)/(:num)']='api/InventoryController/inventory/$1/$2';

//------- Sales Inventory API ---------------------------------------
$route['sales_inventory_api']='api/InventoryController/salesInventory';
$route['sales_inventory_api/(:num)/(:num)']='api/InventoryController/salesInventory/$1/$2';

//------- Sales API ---------------------------------------
$route['sales_api']='api/SalesController/sales';
$route['sales_api/(:num)']='api/SalesController/sales/$1';
*/
//////////////////////////// - CURVDENT UI & API - //////////////////////////////////////////////////////////////////////////////////////

//--------------- Controller UI --------------------------------------

$route['ui']='ui/UIController/ui';
$route['admin']='ui/UIController/admin';