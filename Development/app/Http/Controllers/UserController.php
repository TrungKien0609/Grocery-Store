<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;


class UserController extends Controller
{
    public $user;
    public $cart;
    public $order;
    public function __construct(User $user, Cart $cart, Order $order)
    {
        $this->user =  $user;
        $this->cart = $cart;
        $this->order = $order;
    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'email' => 'required|email|unique:users,email|max:50',
            'password' => [
                'required',
                'string',
                Password::min(8)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
                'confirmed'
            ],
            'role' => Rule::in(['user']),
        ]);
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'role' => $fields['role']
        ]);
        $user->image = '/storage/uploads/default/avatar.png';
        $token = $user->createToken('user-token')->plainTextToken;
        // create cart
        $cart = $this->cart->create([
            'user_id' => $user->id,
            'total_unique_items' => 0,
            'cart_total' =>  0,
            'total_items' => 0,
            'is_emty' => true,
        ]);
        //create order
        $order = $this->order->create([
            'user_id' => $user->id,
            'total_orders' => 0,
            'pending_orders' =>  0,
            'processing_orders' => 0,
            'complete_orders' => 0,
        ]);
        $respone = [
            'user' => $user,
            'token' => $token
        ];
        return response($respone, 201);
    }
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);
        $user = User::where('email', $fields['email'])->first();
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            // throw ValidationException::withMessages([
            //     'email' => ['The provided credentials are incorrect.'],
            // ]);
            return response([
                'message' => 'Email or Password not correct',
            ], 422);
        }
        $token = $user->createToken('user-token')->plainTextToken;

        $respone = [
            'user' => $user,
            'token' => $token
        ];
        return response($respone, 200);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return [
            'message' => 'logged out'
        ];
    }
    public function changePassword(Request $request, $user_id)
    {
        $fields = $request->validate([
            'password' => [
                'required',
                'string',
                Password::min(4)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
            ],
            'new_password' => [
                'required',
                'string',
                Password::min(4)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
                'confirmed'
            ],
        ]);
        if (auth()->user()->id == $user_id) {
            // 'password' => bcrypt($fields['password']),
            $user = User::where('id', $user_id)->first();
            if (Hash::check($fields['password'], $user->password)) {
                if (Hash::check($fields['new_password'], $user->password)) {
                    return response([
                        'message' => "New password must be different from previous password!"
                    ], 400);
                } else {
                    $user->password = bcrypt($fields['new_password']);
                    $user->save();
                    return response([
                        'message' => 'Update successfully!'
                    ], 200);
                }
            } else {
                return response([
                    'message' => "password not correct!"
                ], 400);
            }
        } else
            return response([
                'message' => 'Bad idea'
            ], 400);
    }
    public function index(Request $request)
    {
        $request->validate([
            'per_page' => "numeric|min:1"
        ]);
        return User::whereKeyNot(auth('sanctum')->user()->id)->orderByDesc('updated_at')->orderByDesc('created_at')->paginate($request->per_page);
    }
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'email' => 'required|email|unique:users,email|max:50',
            'password' => [
                'required',
                'string',
                Password::min(4)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
                'confirmed'
            ],
            'role' => 'required',
            'role' =>  Rule::in(['user', 'admin']),
            'image' => 'image|mimes:jpeg,png|max:2048',
            'address' => 'nullable|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'phone' => 'nullable|numeric'
        ]);
        $path = "/storage/uploads/default/avatar.png";
        if (isset($fields['image'])) {
            $path = $fields['image']->store('uploads', 'public');
            $image = Image::make(public_path("storage/{$path}"))->resize(100, 100);
            $newPath = '/storage/' . $path;
            $image->save();
        }
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'image' => $newPath,
            'role' => $fields['role'],
            'address' => $fields['address'],
            'phone' => $fields['phone']
        ]);
        $token = $user->createToken('user-token')->plainTextToken;
        $respone = [
            'user' => $user,
            'token' => $token
        ];
        return true;
    }
    public function seflUpdate(Request $request, $user_id) // for user update
    {
        if (auth()->user()->id == $user_id) {
            $fields = $request->validate([
                'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
                'image' => 'image|mimes:jpeg,png|max:2048',
                'address' => 'nullable|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
                'phone' => 'nullable|numeric'
            ]);
            $user = User::where('id', $user_id)->firstOrFail();
            $user->name = $fields['name'];
            if (!isset($fields['address'])) {
                $user->address = NULL;
            } else {
                $user->address = $fields['address'];
            }
            if (!isset($fields['phone'])) {
                $user->phone = null;
            } else {
                $user->phone = $fields['phone'];
            }
            if (isset($fields['image'])) {
                if ($user->image !== "uploads/default/avatar.png") {
                    Storage::delete('public/' . $user->image);
                }
                $path = $fields['image']->store('uploads', 'public');
                $newImage = Image::make(public_path("storage/{$path}"))->resize(100, 100);
                $newImage->save();
                $user->image = '/storage/' . $path;
            }
            $user->save();
            return response([
                'message' => 'update succesfully'
            ], 200);
        } else {
            return  response([
                'message' => 'User not found'
            ], 404);
        }
    }
    public function show($user_id)
    {
        return User::where('id', $user_id)->firstOrFail();
    }
    public function update(Request $request, $user_id)
    {
        $fields = $request->validate([
            'name' => 'required|string|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'role' => 'required',
            'role' =>  Rule::in(['user', 'admin']),
            'image' => 'image|mimes:jpeg,png|max:2048',
            'address' => 'nullable|regex:/([- ,\/0-9a-zA-Z]+)/|max:50',
            'phone' => 'nullable|numeric'
        ]);
        $user = User::where('id', $user_id)->firstOrFail();
        $user->name = $fields['name'];
        $user->role = $fields['role'];
        if (!isset($fields['address'])) {
            $user->address = NULL;
        } else {
            $user->address = $fields['address'];
        }
        if (!isset($fields['phone'])) {
            $user->phone = null;
        } else {
            $user->phone = $fields['phone'];
        }
        if (isset($fields['image'])) {
            if ($user->image !== "uploads/default/avatar.png") {
                Storage::delete('public/' . $user->image);
            }
            $path = $fields['image']->store('uploads', 'public');
            $newImage = Image::make(public_path("storage/{$path}"))->resize(100, 100);
            $newImage->save();
            $user->image = '/storage/' . $path;
        }
        $user->save();
        return true;
    }
    public function destroy($user_id)
    {
        $user = User::findOrFail($user_id);
        if ($user) {
            if ($user->image !== "uploads/default/avatar.png") {
                Storage::delete('public/' . $user->image);
            }
            $user->delete();
            return true;
        }
    }
    public function SocialSignup($provider)
    {
        // Socialite will pick response data automatic 
        $userSocialite = Socialite::driver($provider)->stateless()->user();
        $checkUser = User::where('email', $userSocialite->email)->first();
        if (!$checkUser) {
            $newUser = User::create([
                'email' => $userSocialite->email,
                'name' => $userSocialite->name,
                'role' => 'user',
                'image' => $userSocialite->avatar,
                'provider' => $provider,
                'password' => null
            ]);
            $token = $newUser->createToken('user-token')->plainTextToken;
            $cart = $this->cart->create([
                'user_id' => $newUser->id,
                'total_unique_items' => 0,
                'cart_total' =>  0,
                'total_items' => 0,
                'is_emty' => true,
            ]);
            //create order
            $order = $this->order->create([
                'user_id' => $newUser->id,
                'total_orders' => 0,
                'pending_orders' =>  0,
                'processing_orders' => 0,
                'complete_orders' => 0,
            ]);
            $respone = [
                'user' => $newUser,
                'token' => $token
            ];
        } else {
            $user = User::where('email', $userSocialite->email)->first();
            $token = $user->createToken('user-token')->plainTextToken;
            $respone = [
                'user' => $user,
                'token' => $token
            ];
        }
        return response($respone, 200);
    }
}
