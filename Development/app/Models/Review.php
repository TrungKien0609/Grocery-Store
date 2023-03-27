<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['star', 'state', 'description', 'like_amount', 'product_id', 'user_id'];
    protected $appends = ['reviewImages', 'user'];
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function reviewImage()
    {
        return $this->hasMany(ReviewImage::class, 'review_id', 'id');
    }
    public function getReviewImagesAttribute()
    {
        return $this->reviewImage()->get();
    }
    public function getUserAttribute()
    {
        return $this->user()->first();
    }
}
