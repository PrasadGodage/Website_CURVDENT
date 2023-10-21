<?php

namespace App\Controllers;

use App\Controllers\BaseController;

 class Home extends BaseController {
  public function index() {
//$data['main_content'] = 'innerpages/home'; // page name
   echo view('innerpages/login');
   // echo view('innerpages/header');
   // // echo view('innerpages/home');
   // echo view('innerpages/footer');
   }

   public function dashboard() {
         echo view('innerpages/header');
         // echo view('innerpages/home');
         echo view('innerpages/footer');
         }
 }
