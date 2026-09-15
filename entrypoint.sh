#!/bin/sh
# Fix storage and cache permissions dynamically at runtime
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

php artisan config:cache
php artisan route:cache
php artisan migrate --force
apache2-foreground