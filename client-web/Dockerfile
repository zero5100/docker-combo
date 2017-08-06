FROM nginx:stable-alpine

# Set the working directory
WORKDIR /etc/nginx/

# Copy in the base config
COPY ./config/nginx.conf ./

# Copy in the env-specific config files
# COPY ./config/nginx.*.conf ./conf.d/
COPY ./config/nginx.production.conf ./conf.d/nginx.env.conf

# Copy the web content into the container
COPY ./public /var/www/html/

# Make ports available to the world outside this container
EXPOSE 80
