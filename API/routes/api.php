<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
//Route::get(path,controller)
Route::get('/admin/categories', [CategoryController::class,"showCategories"]);
Route::post('/admin/category/add', [CategoryController::class,"addNewCategory"]);
Route::put('/admin/category/update/{category}', [CategoryController::class,"updateCategory"]);
Route::delete('/admin/category/delete/{category}', [CategoryController::class,"setDelete"]);


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware('Auth::sunctum')->post('/logout',[AuthController::class,'logOut']);