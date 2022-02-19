<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;

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
Route::get('/category', [CategoryController::class, 'index']);

Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('/category', CategoryController::class)->middleware('ensure.isadmin')->except(['index']);
    Route::apiResource('/user',UserController::class)->middleware('ensure.isadmin');
    Route::post('user/logout', [UserController::class, 'logout']);
});
