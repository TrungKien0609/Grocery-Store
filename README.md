## NeikStore 
![image](https://user-images.githubusercontent.com/80587980/226278807-f7faddc0-7795-44da-910d-829558129ed5.png)
+ This project is the complete clone technology part of https://kachabazar-store.vercel.app/ Website but added some features
  - Login with Google and Facebook
  - Order review
  - Sync cart orders on all machines
  - Search for reviews following stars like Shopee 
+ This project currently is not available on https://neik-store.herokuapp.com/  because starting November 28th, 2022, free Heroku Dynos will no longer be available so I use docker instead.

## Steps to run the app on container
+ `cd grocery-store-laravel`
+ `docker-compose up --build`
+ if the app is available at http://localhost:8000 then 
  - `docker exec -it <grocery_store_container id> sh`
  - `php artisan migrate`
  - `php artisan db:seed --class=UserSeeder`
  -  Go to http://localhost:8000/admin and login with 'admin@gmail.com' email and 'password' password then create your own data to look
+ else 
  - `docker run -it --name temp_grocery_store_container --volumes-from grocery_store_container grocery-store-laravel_grocery_store_app  sh
` 
  - `composer update`
  - `npm install`
  -  Exit current container ( `Ctrl D` )
  - `docker-compose restart`
  - `docker exec -it <grocery_store_container id> sh`
  - `php artisan serve`
  - `npm run build`
  - `php artisan migrate`
  - `php artisan db:seed --class=UserSeeder`
  -  Go to http://localhost:8000/admin and login with 'admin@gmail.com' email and 'password' password then create your own data to look
