<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function showCategories()
    {
        $categories = Category::whereNull('softDelete')->get();
        if ($categories->isEmpty()) {
            return response()->json([
                "categories"=>[],
                "Message"=>"There are no data "
            ]);
        }

        return response()->json(["categories"=>$categories]);
    }

    


    public function addNewCategory(Request $request)
    {
        
       $categorCheck = Category::create($request->all());

      return  response()->json([
            "Message"=>"successfull this record added"
        ]);
    }

    public function setDelete(Request $request, Category $categories)
    {

       $result =  $categories->delete();
       if ($result) {
            return response()->json([
                "success"=>true
            ]);
       }
       else{
            return response()->json([
                "success"=>false
            ]);
       }
    }
}
