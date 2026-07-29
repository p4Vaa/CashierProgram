<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Sale_Item;
class Product extends Model
{
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function seleItems(){
        return  $this->hasMany(Sale_Item::class);
    }
}
