<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $subCategory;

    public function __construct(SubCategory $subCategory)
    {
        $this->subCategory = $subCategory;
    }
    public function index(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return $this->subCategory->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|unique:sub_categories,name|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'category_id' => 'required|numeric|min:1'
        ]);
        $sub = $this->subCategory->create([
            'name' => $fields['name'],
            'category_id' => $fields['category_id'],
        ]);
        return response([
            'message' => 'Add sub-category completely'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show($subCategory_id)
    {
        return $this->subCategory->where('id', $subCategory_id)->firstOrFail();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $subCategory_id)
    {
        $fields = $request->validate([
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'category_id' => 'required|numeric|min:1'
        ]);
        $subCategory = $this->subCategory->where('id', $subCategory_id)->firstOrFail();
        $checkUniqueName = $this->subCategory->where('name', $fields['name'])->first();
        if (!$checkUniqueName) {
            $subCategory->name =  $fields['name'];
        }
        $subCategory->category_id = $fields['category_id'];
        $subCategory->save();
        return response([
            'message' => 'Edit sub-category completely'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($subCategory_id)
    {
        $subCategory = $this->subCategory->where('id', $subCategory_id)->firstOrFail();
        $subCategory->delete();
        return response([
            'message' => 'Delete sub-category completely'
        ], 200);
    }
}
