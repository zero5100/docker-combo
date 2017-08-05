FROM nginx:stable-alpine

# Set the working directory
# WORKDIR /usr/share/nginx/html

# Copy in the base config file
COPY ./config/nginx.conf /etc/nginx/nginx.conf

# Copy in env-specific config files
COPY ./config/nginx.*.conf /etc/nginx/conf.d/

# Copy the web content into the container
COPY ./public /var/www/html/

# Make ports available to the world outside this container
EXPOSE 80
