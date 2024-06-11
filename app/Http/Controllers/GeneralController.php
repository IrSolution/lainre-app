<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function maintance()
    {
        return inertia('Maintance');
    }
}
