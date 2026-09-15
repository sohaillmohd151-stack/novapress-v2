COPY . /var/www/html

# Ensure storage and bootstrap/cache exist and belong to www-data
RUN mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache storage/logs \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache