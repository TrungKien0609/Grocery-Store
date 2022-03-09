<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Cart;
use App\Models\Product;
use App\Models\CartItem;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $order;
    protected $orderItem;
    protected $cart;
    protected $cartItem;
    protected $product;

    public function __construct(Order $order, OrderItem $orderItem, Cart $cart, CartItem $cartItem, Product $product)
    {
        $this->order = $order;
        $this->orderItem = $orderItem;
        $this->cart = $cart;
        $this->cartItem = $cartItem;
        $this->product = $product;
    }
    public function index()
    {
        $user_id = auth()->user()->id;
        return $this->order->where('user_id', $user_id)->firstOrFail();
    }
    public function store(Request $request)
    {
        $fields = $request->validate([
            'orders' => 'required|integer|min:1',
            'cart_items' => 'required'
        ]);
        $user_id = auth()->user()->id;
        $order = $this->order->where('user_id', $user_id)->firstOrFail();
        $order->total_orders += $fields['orders'];
        $order->pending_orders  += $fields['orders'];

        foreach ($fields['cart_items'] as $item) {
            $this->orderItem->create([
                'total' => $item['itemTotal'],
                'status' => 'pending',
                'method' => 'COD',
                'quantity' => $item['hasAdd'],
                'product_id' => $item['id'],
                'order_id' =>  $order['id'],
            ]);
            $product = $this->product->where('id', $item['id'])->first();
            $product->quantity = $product->quantity - $item['hasAdd'];
            if ($product->quantity <= 0) {
                $product->stock_info = "out stock";
            }
            $product->save();
        }
        $order->save();

        $cart =  $this->cart->where('user_id', $user_id)->first();
        $cart->total_unique_items = 0;
        $cart->cart_total = 0;
        $cart->total_items = 0;
        $cart->is_emty = true;

        // delete cart item
        $this->cartItem->where('cart_id', $cart->id)->delete();

        return response([
            'message' => 'done'
        ], 200);
    }
}
