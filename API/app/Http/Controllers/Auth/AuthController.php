<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            "name"=>"required|max:30",
            "email"=>"required|email|unique:users",
            "password"=>"required|min:4|max:25",
            "role"=>"required|in:Admin,Cashier"
        ]);

        $user = User::create([
            "name"=>$request->name,
            "email"=>$request->email,
            "password"=>Hash::make($request->password),
            "role"=>$request->role
        ]);
    
        if($user){
            return response()->json([
                "status"=> "success",
                "user"=>$user
            ],201);
        }

    }
}
