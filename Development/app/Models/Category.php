<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SubCategory;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'image','slug'];
    protected $appends = ['subCategory'];
    /**
     * Get all of the subCategories for the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subCategory()
    {
        return $this->hasMany(SubCategory::class, 'category_id', 'id');
    }
    public function getSubCategoryAttribute()
    {
        return $this->subCategory()->get();
    }
}
