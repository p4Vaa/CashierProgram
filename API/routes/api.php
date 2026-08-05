<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ProductController;

Route::middleware("auth:sanctum")->group(function () {
    
    
    Route::middleware('role:Admin')->get('/admin/categories', [CategoryController::class,"showCategories"]);
    Route::middleware('role:Admin')->get('/admin/getCategories',[CategoryController::class,"getCategories"]);    
    Route::middleware('role:Admin')->post('/admin/category/add', [CategoryController::class,"addNewCategory"]);
    Route::middleware('role:Admin')->put('/admin/category/update/{category}', [CategoryController::class,"updateCategory"]);
    Route::middleware('role:Admin')->delete('/admin/category/delete/{category}', [CategoryController::class,"setDelete"]);
    Route::middleware('role:Admin')->post('/register',[AuthController::class,'register']);
    
    Route::middleware('role:Admin')->get('/admin/products',[ProductController::class,'products']);
    Route::middleware('role:Admin')->post('/admin/product/add',[ProductController::class,'addProduct']);
    Route::middleware('role:Admin')->get('/admin/product/{product}',[ProductController::class,"getProduct"]);
    Route::middleware('role:Admin')->put('/admin/product/update/{product}',[ProductController::class,"editProduct"]);
    Route::middleware('role:Admin')->delete('/admin/product/delete/{product}',[ProductController::class,'del']);
    Route::post('/logout',[AuthController::class,'logOut']);
    
    });

Route::post('/login',[AuthController::class,'login']);