<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Super extends BaseController
{
    public function index()
    {
        return view("super/login");
    }
}
