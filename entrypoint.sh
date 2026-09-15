#!/bin/sh
# Recreate storage directories and fix permissions safely
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/logs

# Ensure log file exists and is writable by www-data
touch /var/www/html/storage/logs/laravel.log
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache

# Build frontend assets if manifest is missing
if [ ! -f /var/www/html/public/build/manifest.json ]; then
    echo "Vite manifest not found. Building frontend assets..."
    npm install --legacy-peer-deps
    npm run build
    chown -R www-data:www-data /var/www/html/public/build
fi

php artisan config:cache
php artisan route:cache
php artisan migrate --force
apache2-foreground