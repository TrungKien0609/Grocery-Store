<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;

class CartController extends Controller
{
    protected $cart;
    protected $cartItem;

    public function __construct(Cart $cart, CartItem $cartItem)
    {
        $this->cart = $cart;
        $this->cartItem = $cartItem;
    }

    public function index()
    {
        $user_id = auth()->user()->id;
        $cart = $this->cart->where('user_id', $user_id)->firstOrFail();
        return $cart;
    }

    public function store(Request $request)
    {

        $fields = $request->validate([
            'total_unique_items' => 'required|integer|min:1',
            'cart_total' => 'required|integer|min:1',
            'total_items' => 'required|integer|min:1',
            'product_id' => 'required|integer|min:1',
            'item_quantity' => 'required|integer|min:1'
        ]);
        $user_id = auth()->user()->id;
        $cart = $this->cart->where('user_id', $user_id)->firstOrFail();
        $cart->total_unique_items =   $fields['total_unique_items'];
        $cart->cart_total =   $fields['cart_total'];
        $cart->total_items =   $fields['total_items'];
        $cart->is_emty = false;
        //check cart-item already exist
        $cartItem = $this->cartItem->where('cart_id', $cart->id)->where('product_id', $fields['product_id'])->first();
        if ($cartItem) {
            $cartItem->quantity =  $fields['item_quantity'];
            $cartItem->save();
        } else {
            $this->cartItem->create([
                'quantity' => $fields['item_quantity'],
                'product_id' => $fields['product_id'],
                'cart_id' => $cart->id,
            ]);
        }
        $cart->save();
        return response([
            'message' => 'Done'
        ], 201);
    }

    public function destroy(Request $request)
    {
        $fields = $request->validate([
            'total_unique_items' => 'required|integer|min:0',
            'cart_total' => 'required|integer|min:0',
            'total_items' => 'required|integer|min:0',
            'product_id' => 'required|integer|min:1',
        ]);

        $user_id = auth()->user()->id;
        $cart = $this->cart->where('user_id', $user_id)->firstOrFail();
        $cartItem = $this->cartItem->where('cart_id', $cart->id)->where('product_id', $fields['product_id'])->firstOrFail();
        $cartItem->delete();

        $cart->total_unique_items =   $fields['total_unique_items'];
        $cart->cart_total =   $fields['cart_total'];
        $cart->total_items =   $fields['total_items'];
        $cart->is_emty = $fields['total_items'] == 0 ? true : false;
        $cart->save();

        return response([
            'message' => 'Delete successfully'
        ], 200);
    }

    public function syncCart(Request $request)
    {
        $fields = $request->validate([
            'total_unique_items' => 'required|integer|min:0',
            'cart_total' => 'required|integer|min:0',
            'total_items' => 'required|integer|min:0',
            'items' => 'required',
        ]);

        $user_id = auth()->user()->id;
        $cart = $this->cart->where('user_id', $user_id)->first();
        $cart->total_unique_items = $fields['total_unique_items'];
        $cart->cart_total = $fields['cart_total'];
        $cart->total_items = $fields['total_items'];
        $cart->is_emty = $fields['total_items'] > 0 ? false : true;
        $cart->save();
        if (count($fields['items']) > 0) {
            foreach ($fields['items'] as $item) {

                $cartItem = $this->cartItem->where('cart_id', $cart->id)->where('product_id', $item['id'])->first();
                if ($cartItem) {
                    $cartItem->quantity = $item['hasAdd'];
                    $cartItem->save();
                } else {
                    $this->cartItem->create([
                        'quantity' => $item['hasAdd'],
                        'product_id' => $item['id'],
                        'cart_id' => $cart['id'],
                    ]);
                }
            }
        }
        return response([
            'message' => 'done'
        ], 200);
    }
}
