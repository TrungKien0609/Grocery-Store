## NeikStore 
![image](https://user-images.githubusercontent.com/80587980/226278807-f7faddc0-7795-44da-910d-829558129ed5.png)
+ This project is the complete clone technology part of https://kachabazar-store.vercel.app/ Website but added some features
  - Login with Google and Facebook
  - Order review
  - Sync cart orders on all machines
  - Search for reviews following stars like Shopee 
  - Store image with GoogleDrive
+ This project currently is not available on https://neik-store.herokuapp.com/  because starting November 28th, 2022, free Heroku Dynos will no longer be available so I use docker instead.

## Steps to run the app on container
+ `cd Development`
+ `docker-compose up --build`
+ `docker exec -it <grocery_store_container id> sh`
+ `php artisan migrate`
+ `php artisan db:seed --class=UserSeeder`
+ `php artisan storage:link`
+ `npm run watch` hot reload for development
+  Go to http://localhost:8000/admin and login with 'admin@gmail.com' email and 'password' password then create your own data to look
