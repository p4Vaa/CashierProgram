<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


Route::middleware("auth:sanctum")->group(function () {
    
    
    Route::middleware(['auth:sanctum','role:Admin'])->delete('/admin/categories', [CategoryController::class,"showCategories"]);
    Route::middleware(['auth:sanctum','role:Admin'])->post('/admin/category/add', [CategoryController::class,"addNewCategory"]);
    Route::middleware(['auth:sanctum','role:Admin'])->put('/admin/category/update/{category}', [CategoryController::class,"updateCategory"]);
    Route::middleware(['auth:sanctum','role:Admin'])->delete('/admin/category/delete/{category}', [CategoryController::class,"setDelete"]);
    Route::middleware(['auth:sanctum','role:Admin'])->post('/register',[AuthController::class,'register']);
   
    Route::post('/logout',[AuthController::class,'logOut']);
    
    });

Route::post('/login',[AuthController::class,'login']);