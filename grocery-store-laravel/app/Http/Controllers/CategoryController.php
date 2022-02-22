<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }
    public function getAll()
    {
        return $this->category->all();
    }

    public function index(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return Category::orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'image' => 'required|image|mimes:jpeg,png|max:2048',
        ]);
        $path = $request->file('image')->store('uploads', 'public');
        $image = Image::make(public_path("storage/{$path}"))->resize(48, 48);
        $image->save();
        Category::create([
            'name' => $request->name,
            'image' => $path,
        ]);
        return response([
            'message' => 'Add sub category successfully'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($category_id)
    {
        return Category::where('id', $category_id)->firstOrFail();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $category_id)
    {
        $fields = $request->validate([
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'image' => 'image|mimes:jpeg,png|max:2048',
        ]);
        $category = Category::where('id', $category_id)->firstOrFail();
        $checkUniqueName = Category::where('name', $request->name)->first();
        if (!$checkUniqueName) {
            $category->name =  $request->name;
        }
        if ($request->hasFile('image')) {
            Storage::delete('public/' . $category->image);
            $path = $request->file('image')->store('uploads', 'public');
            $newImage = Image::make(public_path("storage/{$path}"))->resize(48, 48);
            $newImage->save();
            $category->image = $path;
        }
        $category->save();
        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($category_id)
    {
        $category = Category::findOrFail($category_id);
        if ($category) {
            Storage::delete('public/' . $category->image);
            $category->delete();
            return true;
        }
    }
}
