<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }
    public function showWithSlug($slug)
    {
        return $this->product->where('slug', $slug)->firstOrFail();
    }
    public function search(Request $request)
    {
        $fields = $request->validate([
            'per_page' => "numeric|min:1",
            'category' => 'string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'subCategory' => 'string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'product' => 'string|regex:/([- ,\/0-9a-zA-Z]+)/|max:150'
        ]);
        $subCategory = isset($fields['subCategory']) ? Str::slug($fields['subCategory']) : null;
        $category = isset($fields['category']) ? Str::slug($fields['category']) : null;
        $product = isset($fields['product']) ? Str::slug($fields['product']) : null;

        // Use whereHas() to make and query: stackoverflow

        return $this->product->where('slug', 'LIKE', '%' . $product . '%')->whereHas('subCategory', function ($q) use ($subCategory) {
            $q->where('slug', 'LIKE', '%' . $subCategory . '%');
        })->whereHas('subCategory.category', function ($query) use ($category) {
            $query->where('slug', 'LIKE', '%' . $category . '%');
        })->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }
    public function getOnlyProductsShowed(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return $this->product->where('status', 'show')->where('discount', '0')->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }
    public function getOnlyDiscountProductsShowed(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return $this->product->where('status', 'show')->where('discount', '<>', '0')->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }
    public function index(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return $this->product->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
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
            'sub_category_id' => 'required|numeric|integer|min:1',
            'name' => 'required|string|unique:products,name|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'original_price' => 'required|integer|numeric|min:1',
            'discount' => 'required|numeric|integer|min:0',
            'description' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:1000',
            'unit' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:30',
            'quantity' => 'required|numeric|integer|min:1',
            'status' => ['required', Rule::in(['show', 'hide'])],
            'image' => 'required|image|mimes:jpeg,png|max:2048',
        ]);
        // if (!File::isDirectory(public_path('/uploads/products'))) {
        //     File::makeDirectory(public_path('/uploads/products'), 0777, true, true);
        // }
        // $imageName =  time() . $request->file('image')->getClientOriginalName();
        // $path = '/uploads/products/' .  $imageName;
        // $image = Image::make($request->file('image'))->save(public_path($path));
        $imageName =  $request->file('image')->getClientOriginalName();
        $result = Storage::disk('google')->putFileAs("", $request->file('image'),  $imageName);
        $path = Storage::disk('google')->url($imageName);

        // $newImage = Image::make(public_path("storage/{$path}"))->resize(100, 100);
        // I got image from the clone website ( had resized ( compress) one times)
        // if resize again so that The image quality lost a lot of.
        $price = round((int)$fields['original_price'] * (1 - (int)$fields['discount'] * 0.01));
        $slug =  Str::slug($fields['name']);
        $product = $this->product->create([
            'name' => $fields['name'],
            'sub_category_id' => $fields['sub_category_id'],
            'original_price' =>  $fields['original_price'],
            'price' => $price,
            'discount' =>  $fields['discount'],
            'description' =>  $fields['description'],
            'unit' =>  $fields['unit'],
            'slug' =>  $slug,
            'quantity' =>  $fields['quantity'],
            'status' =>  $fields['status'],
            'stock_info' => 'in stock',
            'image' =>   $path
        ]);
        return response([
            'message' => 'Thêm sản phẩm thành công'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($product_id)
    {
        return $this->product->where('id', $product_id)->firstOrFail();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $product_id)
    {
        $fields = $request->validate([
            'sub_category_id' => 'required|numeric|integer|min:1',
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'original_price' => 'required|integer|numeric|min:1',
            'discount' => 'required|numeric|integer|min:0',
            'description' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:1000',
            'unit' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:30',
            'quantity' => 'required|numeric|integer|min:1',
            'status' => ['required', Rule::in(['show', 'hide'])],
            'image' => 'image|mimes:jpeg,png|max:2048',
        ]);

        $product = $this->product->where('id', $product_id)->firstOrFail();
        $price = round((int)$fields['original_price'] * (1 - (int)$fields['discount'] * 0.01));
        $slug =  Str::slug($fields['name']);
        if (isset($fields['image'])) {
            // if (File::exists(public_path($product->image))) {
            //     File::delete(public_path($product->image));
            // }
            // $imageName =  time() . $request->file('image')->getClientOriginalName();
            // $path = '/uploads/products/' .  $imageName;
            // $image = Image::make($request->file('image'))->save(public_path($path));

            $imageName =  $request->file('image')->getClientOriginalName();
            $result = Storage::disk('google')->putFileAs("", $request->file('image'),  $imageName);
            $path = Storage::disk('google')->url($imageName);


            // $newImage = Image::make(public_path("storage/{$path}"))->resize(100, 100);
            // I got image from the clone website ( had resized ( compress) one times)
            // if resize again so that The image quality lost a lot of.
            $product->image = $path;
        }
        $product->sub_category_id = $fields['sub_category_id'];
        $checkUniqueName = $this->product->where('name', $fields['name'])->first();
        if (!$checkUniqueName) {
            $product->name =  $fields['name'];
        }
        $product->original_price = $fields['original_price'];
        $product->discount = $fields['discount'];
        $product->price =  $price;
        $product->slug = $slug;
        $product->description = $fields['description'];
        $product->unit = $fields['unit'];
        $product->status = $fields['status'];
        $product->quantity = $fields['quantity'];
        $product->save();
        return response([
            'message' => 'Update successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($product_id)
    {
        $product = $this->product->findOrFail($product_id);
        if ($product) {
            // if (File::exists(public_path($product->image))) {
            //     File::delete(public_path($product->image));
            // }
            $product->delete();
            return response([
                'message' => 'Deleting successfully'
            ], 200);
        }
    }
}
