<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'total_orders', 'pending_orders', 'processing_orders', 'complete_orders'];
    protected $appends = ['orderItem'];

    public function orderItem()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
    public function getOrderItemAttribute()
    {
        return $this->orderItem()->orderByDesc('updated_at')->orderByDesc('created_at')->get();
    }
}
