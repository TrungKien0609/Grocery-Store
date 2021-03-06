<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SubCategory;
use App\Models\Category;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['sub_category_id', 'name', 'original_price', 'discount', 'price', 'description', 'unit', 'quantity', 'status', 'image', 'slug', 'stock_info'];
    protected $appends = ['category', 'subCategory', 'category_id', 'reviews'];

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
        // belongsTo(class,foreinkey of current table , primarykey of parant table)
    }
    public function review()
    {
        return $this->hasMany(Review::class, 'product_id', 'id');
    }
    public function getCategoryAttribute()
    {
        return $this->subCategory()->first()->category()->first()->name;
    }
    public function getSubCategoryAttribute()
    {
        return $this->subCategory()->first()->name;
    }
    public function getCategoryIdAttribute()
    {
        return $this->subCategory()->first()->category()->first()->id;
    }
    public function getReviewsAttribute()
    {
        return $this->review()->get();
    }
}
