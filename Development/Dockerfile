FROM php:8.0.5-fpm-alpine

RUN mkdir -p /grocery-store-app
# Set working directory
WORKDIR /grocery-store-app

# Install dependencies
RUN apk add --no-cache \
    icu-dev \
    libzip-dev \
    git \
    zip \
    unzip

# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install Node.js and npm
RUN apk update
RUN apk add --no-cache nodejs npm

COPY . .

RUN  npm install
RUN composer install 


RUN chmod -R 755 vendor
RUN chmod -R 755 node_modules

EXPOSE 8000

# CMD [ "php", "artisan", "serve" ]