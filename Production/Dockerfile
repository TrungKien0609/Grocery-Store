FROM php:7.3-fpm-alpine

RUN mkdir -p /grocery-store-app
# Set working directory
WORKDIR /grocery-store-app

# Install dependencies
RUN apk add --no-cache \
    freetype \
    libjpeg-turbo \
    libpng \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-enable gd \
    && apk del --no-cache \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    && rm -rf /tmp/*

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