<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
*/
// public route 

Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);

Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/all', [CategoryController::class, 'getAll']);
Route::get('/category/{category}', [CategoryController::class, 'show']);

Route::get('/sub-category', [SubCategoryController::class, 'index']);
Route::get('/sub-category/{subCategory}', [SubCategoryController::class, 'show']);

Route::get('/product/search', [ProductController::class, 'search']);
Route::get('/product/get', [ProductController::class, 'getOnlyProductsShowed']);
Route::get('/product/discount/get', [ProductController::class, 'getOnlyDiscountProductsShowed']);
Route::get('/product/{product}', [ProductController::class, 'show']);
Route::get('/product/info/{slug}', [ProductController::class, 'showWithSlug']);


Route::post('/login/socialite/{provider}', [UserController::class, 'SocialSignup']); // login with google and facebook

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('/category', CategoryController::class)->middleware('ensure.isadmin')->except(['index', 'show', 'getAll']);
    Route::apiResource('/user', UserController::class)->middleware('ensure.isadmin');
    Route::apiResource('/sub-category', SubCategoryController::class)->middleware('ensure.isadmin')->except(['index', 'show']);
    Route::apiResource('/product', ProductController::class)->middleware('ensure.isadmin')->except(['show']);
    Route::post('user/logout', [UserController::class, 'logout']);
});
