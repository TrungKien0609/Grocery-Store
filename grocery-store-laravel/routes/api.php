<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;
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

Route::get('/product', [ProductController::class, 'index']);
Route::get('/product/{product}', [ProductController::class, 'show']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('/category', CategoryController::class)->middleware('ensure.isadmin')->except(['index', 'show', 'getAll']);
    Route::apiResource('/user', UserController::class)->middleware('ensure.isadmin');
    Route::apiResource('/sub-category', SubCategoryController::class)->middleware('ensure.isadmin')->except(['index', 'show']);
    Route::apiResource('/product', ProductController::class)->middleware('ensure.isadmin')->except(['index', 'show']);
    Route::post('user/logout', [UserController::class, 'logout']);
});
