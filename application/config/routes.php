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
// $route['addPost/(:num)']='admin/AdminController/addPost/$1';
$route['category']='admin/AdminController/category';
$route['subscriber']='admin/AdminController/subscriber';
$route['newsletter']='admin/AdminController/newsletter';
$route['appointment']='admin/AdminController/appointment';
$route['inquiry']='admin/AdminController/inquiry';


//Employee Login and logout api
$route['employee_login']='api/EmployeeLoginController/login_auth';
$route['employeeLogout']='api/EmployeeLoginController/logout';

//--------------- Controller UI --------------------------------------

$route['home']='welcome/home';
$route['services']='welcome/services';
$route['blog']='welcome/blog';
$route['blog_page/(:num)']='welcome/blogPage/$1';


//--------------- Controller API --------------------------------------

//category Api
$route['category_api']='api/CategoryController/category';
$route['category_api/(:num)']='api/CategoryController/category/$1';

//category Api without Authorization
$route['blog_api']='api/CategoryUiController/category';
$route['blog_api/(:num)']='api/CategoryUiController/category/$1';

//posting Api
$route['posting_api']='api/PostingController/posting';
$route['posting_api/(:num)']='api/PostingController/posting/$1';


//posting Api without Authorization
$route['blogpage_api']='api/PostingUiController/posting';
$route['blogpage_api/(:num)']='api/PostingUiController/posting/$1';

//Newsletter Api
$route['newsletter_api']='api/NewsletterController/newsletter';
$route['newsletter_api/(:num)']='api/NewsletterController/newsletter/$1';

//ContactForm Api
$route['contact_api']='api/ContactFormController/contact';
// $route['contact_api/(:num)']='api/ContactFormController/contact/$1';

//Newsletter Api without Authorization
$route['newsletterUi_api']='api/NewsletterUiController/newsletter';
$route['newsletterUi_api/(:num)']='api/NewsletterUiController/newsletter/$1';

//postNewsletter Api
$route['postNewsletter_api']='api/PostNewsletterController/postingNews';
$route['postNewsletter_api/(:num)']='api/PostNewsletterController/postingNews/$1';

//postNewsletter Api without Authorization
$route['subsriberpage_api']='api/PostNewsletterUiController/postingNews';
$route['subsriberpage_api/(:num)']='api/PostNewsletterUiController/postingNews/$1';



//AppointmentForm Api 
$route['appointment_api']='api/AppointmentFormController/appointment';
$route['appointment_api/(:num)']='api/AppointmentFormController/appointment/$1';

//AppointmentForm Api without Authorization
$route['appointmentUi_api']='api/AppointmentFormUiController/appointment';
$route['appointmentUi_api/(:num)']='api/AppointmentFormUiController/appointment/$1';
  
//SendEmail api
$route['sendEmail_api']='api/SendEmailController/sendMail';
$route['sendPostEmail_api']='api/SendEmailController/sendPostMail';

