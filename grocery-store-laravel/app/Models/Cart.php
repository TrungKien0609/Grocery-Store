<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'total_unique_items', 'cart_total', 'total_items', 'is_emty'];
    protected $appends = ['cartItem'];
    public function cartItem()
    {
        return $this->hasMany(CartItem::class, 'cart_id', 'id');
    }
    public function getCartItemAttribute()
    {
        return $this->cartItem()->get();
    }
}
