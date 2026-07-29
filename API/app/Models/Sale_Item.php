<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Sale;  
use App\Models\Product;  
class Sale_Item extends Model
{
    public function sale() {
        return $this->belongsTo(Sale::class);
    }
    public function product()  {
        return $this->belongsTo(Product::class);
    }
}
