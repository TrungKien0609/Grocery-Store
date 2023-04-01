## NeikStore 
![image](https://user-images.githubusercontent.com/80587980/226278807-f7faddc0-7795-44da-910d-829558129ed5.png)
![image](https://user-images.githubusercontent.com/80587980/229304114-bce062b3-ba43-4de7-a051-e407ad8a1c27.png)

+ This project is the complete clone technology part of https://kachabazar-store.vercel.app/ Website but added some features
  - Login with Google and Facebook
  - Order review
  - Sync cart orders on all machines
  - Search for reviews following stars like Shopee 
  - Store image with GoogleDrive
+ This project currently is not available on https://neik-store.herokuapp.com/  because starting November 28th, 2022, free Heroku Dynos will no longer be available. It's current on https://neik-store.freeoda.com but not fully completed. you could use docker instead.

## Steps to run the app on container
+ `cd Development`
+ `docker-compose up --build`
+ `docker exec -i grocery_store_database_container mysql -uroot -p123456 laravel < dump.sql` import db
+ `docker exec -it grocery_store_container sh`
+ `php artisan storage:link`
+ `npm run watch` hot reload for development
+  App will be ready at http://localhost:8000
+  You could go to http://localhost:8000/admin and login with 'admin@gmail.com' email and 'password' password then create your own data to look

Note: If you would like to use FaceBook and Google login feature. You need to provide all Google and Facebook configs by yourself ( It's currently  in  `resources/js/vue/config/index.js` and `.env` file. Storing images in GoogleDrive feature is'nt available in local instead I use with File Storage.
