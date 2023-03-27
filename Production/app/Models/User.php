<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = ['email', 'password', 'role', 'name', 'image', 'address', 'phone', "provider"];
    public function cart()
    {
        return $this->hasOne(Cart::class);
    }
}
