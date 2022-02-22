<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Product;

class SubCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'category_id'];
    protected $appends = ['category'];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
        // belongsTo(class,foreinkey of current table , primarykey of parant table)
    }
    public function product()
    {
        return $this->hasMany(Product::class, 'product_id', 'id');
    }
    public function getCategoryAttribute()
    {
        return $this->category()->first()->name;
    }
}
