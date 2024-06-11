<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::count();

        return inertia('Dashboard', [
            'user' => $user,
        ]);
    }
}
