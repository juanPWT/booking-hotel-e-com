<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class AuthOffice extends BaseController
{
    public function index()
    {
        return view("backOffice/auth/login");
    }
}