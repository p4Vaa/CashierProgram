<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function products()
    {
        $products = Product::with('category')->get();
        return response()->json([
            "status"=>"success",
            "products"=>$products 
        ]);
    }

    public function getProduct(Product $product) {
        $product["category"]= $product->category;
        if(!$product){
            return response()->json([
                "status"=> "error",
                "product"=>$product
                ]);
        }
        return response()->json([
            "status"=> "success",
            "product"=>$product
        ]); 
    }

    
    public  function editProduct(Request $request, Product $product){
         $request->validate([
            "name"=> "required|min:3|max:30",
            "barCode"=> "required|min:3|max:30",
            "unit"=> "required",
            "sellPrice"=> "required",
            "costPrice"=> "required",
            "category_id"=> "required",
            "stockQuantity"=> "required"
         ]);
         $product->update([
             "name"=> $request->name,
            "barCode"=> $request->barCode,
            "unit"=> $request->unit,
            "sellPrice"=> $request->sellPrice,
            "costPrice"=> $request->costPrice,
            "category_id"=> $request->category_id,
            "stockQuantity"=> $request->stockQuantity
         ]);
         return response()->json(["status"=>"success"]);    
         }
 

    public function addProduct(Request $request)
    {
        $request->validate([
            "name"=> "required|min:3|max:30",
            "barCode"=> "required|unique:products|min:3|max:30",
            "unit"=> "required",
            "sellPrice"=> "required",
            "costPrice"=> "required",
            "category_id"=> "required",
            "stockQuantity"=> "required"
        ]);
        Product::create([
            "name"=> $request->name,
            "barCode"=> $request->barCode,
            "unit"=> $request->unit,
            "sellPrice"=> $request->sellPrice,
            "costPrice"=> $request->costPrice,
            "category_id"=> $request->category_id,
            "stockQuantity"=> $request->stockQuantity
        ]);
        return response()->json([
            "status"=> "success",   
            "message"=> "successfully Added"
        ]);
    }






    public function del(Product $product)
    {
        $product->delete();
        return response()->json([
            "status"=> "success"
        ]);
    }
}
