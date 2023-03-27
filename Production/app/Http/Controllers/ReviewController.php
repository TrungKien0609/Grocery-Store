<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Product;
use App\Models\ReviewImage;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $review;
    public $product;
    public $reviewImage;
    public function __construct(Review $review, Product $product, ReviewImage $reviewImage)
    {
        $this->review = $review;
        $this->product = $product;
        $this->reviewImage = $reviewImage;
    }
    public function index(Request $request, $product_slug)
    {
        $request->validate([
            'per_page' => "integer|min:1"
        ]);
        $options = $request->option;
        $product = $this->product->where('slug', $product_slug)->firstOrFail();
        if (count($options) === 0) {
            $reviews = $this->review->where('product_id', $product->id)->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
        } else {
            $reviews = $this->review->where('product_id', $product->id)->whereIn('star', $options)->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
        }
        $stars = $this->review->where('product_id', $product->id)->get('star');
        $data = [
            'reviews' => $reviews,
            'stars' =>  $stars,
            'option' => $request->option,
        ];
        return response($data, 200);
    }

    public function checkAlreadyRatted(Request $request)
    {
        $user_id = auth()->user()->id;
        $product = $this->product->where('slug', $request->slug)->firstOrFail();
        $review = $this->review->where('user_id', $user_id)->where('product_id', $product->id)->first();
        if ($review) {
            return response([
                'message' => 'Already ratted this product'
            ], 403);
        } else {
            return response([
                'message' => 'Okay'
            ], 200);
        }
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
            'slug' => 'required|string',
            'ratting' => 'required|integer|min:1|max:5',
            'message' => '',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $user_id = auth()->user()->id;
        $product = $this->product->where('slug', $fields['slug'])->firstOrFail();
        $reviewCheck = $this->review->where('user_id', $user_id)->where('product_id', $product->id)->first();
        // check user already ratted or not ?
        if ($reviewCheck) {
            return response([
                'message' => 'Already ratted this product'
            ], 403);
        } else {
            // $message = $fields['message'] !== "" ? $fields['message'] : "";
            $review = $this->review->create([
                'star' =>  $fields['ratting'],
                'state' => 'Purchased',
                'description' =>  $fields['message'],
                'like_amount' => 0,
                'product_id' => $product->id,
                'user_id' => $user_id,
            ]);
            if ($request->hasFile('images')) {
                // if (!File::isDirectory(public_path('/uploads/reviews'))) {
                //     File::makeDirectory(public_path('/uploads/reviews'), 0777, true, true);
                // }
                foreach ($request->file('images') as $image) {
                    // $imageName =  time().$image->getClientOriginalName();
                    // $path = '/uploads/reviews/' .  $imageName;
                    // $image = Image::make($image)->save(public_path($path));

                    $imageName =  $image->getClientOriginalName();
                    $result = Storage::disk('google')->putFileAs("", $image,  $imageName);
                    $path = Storage::disk('google')->url($imageName);

                    $this->reviewImage->create([
                        'review_id' => $review->id,
                        'image' =>  $path,
                    ]);
                }
            }
            return response([
                'message' => 'Successfully ratting'
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review)
    {
        //
    }
}
