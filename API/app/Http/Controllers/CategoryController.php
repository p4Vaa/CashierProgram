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
        
       $categorCheck = Category::create([
                        "name"=> $request->name,
                        "description"=>$request->description
                    ]);
        if ($categorCheck) {
            return  response()->json([
                    "success"=>true,
                ]);
        }
        else{
            return response()->json([
                "success"=>false
            ]);
        }
    
    }

    public function setDelete(Request $request, Category $category)
    {

       $result =  $category->delete();
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


    public function updateCategory(Request $request, Category $category){
        $result = $category->update([
            "name"=> $request->name,
            "description"=> $request->description  
        ]);
        if ($result) {
            return response()->json([
                "success"=>true,
                "cate"=>$category,
                "result"=>$result
            ]);
        }
        
         return response()->json([
                "success"=>false ,
                "cate"=>$category,
                "result"=>$result
        ]);
    }

    public function  getCategories(){
        $categories = Category::all();
        return response()->json([
            "categories"=> $categories,
        ]);
    }

}
