<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
   public  function user(){
        return $this->belongsTo(User::class);
    }
    public function saleItems()
    {
        return $this->hasMany(Sale_Item::class);
    }
}
