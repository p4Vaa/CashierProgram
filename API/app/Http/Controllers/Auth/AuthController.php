<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
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

    public function login(Request $request){
        // $request->validate([
        //     "email"=> "email|required",
        //     "pass"=>"required"
        // ]);   
        $user =  User::where("email","like",$request->email,"")->first();
        if(!$user){
            return response()->json([
                "message"=>"invalid ",
                "user"=> ""
                ],401);
        }
       $result = Hash::check($request->pass, $user->password);

       if(!$result){
            return response()->json([
                "message"=>"invalid ",
                "user"=> ""
                ],401);
       }

        $token = $user->createToken("api-token")->plainTextToken;
        return response()->json([
            "user"=> $user,
            "token"=> $token,
            "status"=>"success"]);
    }
    
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            "status"=> "success",
            "Message"=>"user Logout"
        ]);
    }
}
