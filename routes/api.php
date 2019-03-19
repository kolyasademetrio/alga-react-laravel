<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->get('/pages', function (Request $request) {
    return $request->pages();
});

Route::resource('users', 'Api\UserController');
Route::resource('pages', 'Api\PagesController');
Route::resource('menu', 'Api\MenuController');
Route::resource('products', 'Api\ProductsController');
//Route::resource('/products/reccomended', 'Api\ProductsController@reccomended');

