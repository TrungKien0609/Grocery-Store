FROM php:7.4.0-fpm-alpine

RUN mkdir -p /grocery-store-app-backend
# Set working directory
WORKDIR /grocery-store-app-backend

# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install mysqli pdo pdo_mysql

COPY . .

RUN composer install

RUN chmod -R 777 vendor

EXPOSE 8000

# CMD [ "php", "artisan", "serve" ]