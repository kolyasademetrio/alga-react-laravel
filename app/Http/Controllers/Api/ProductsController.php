<?php

namespace App\Http\Controllers\Api;

use DB;
use App\Products;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Products::all();
        $categories = DB::table('categories')->get();
        //$categoriesRelationship = DB::table('categories_relationship')->get();
        $categoriesRelationship = DB::select("SELECT
                                            categories.category_filter_by AS 'catFilterBy',
                                            products.id AS 'productID'
                                          FROM
                                            categories, products, categories_relationship
                                          WHERE
                                            categories.category_id = categories_relationship.category_id
                                          AND
                                            products.id = categories_relationship.object_id"
                                        );

        return response()->json([
            'productsList' => $products,
            'categories' => $categories,
            'categoriesRelationship' => $categoriesRelationship,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
