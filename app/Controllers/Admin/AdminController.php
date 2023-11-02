<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;

class AdminController extends BaseController
{
    public function index()
    {
        return view('login');
    }

    public function dashboard() {
        return view('header')
            .view('sidebar/side_bar')
            .view('dashboard/dashboard')
            .view('footer')
            .view('htmlend');
    }
}
