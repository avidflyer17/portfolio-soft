FROM nginx:alpine

# Copy static assets
COPY . /usr/share/nginx/html

# Custom Nginx configuration (optional, using default for now but ready for override)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
