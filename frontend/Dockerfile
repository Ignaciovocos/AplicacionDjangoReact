# Stage 1 Build process

# Declare image
FROM node:latest as build 

# Copy app and create workdir
WORKDIR /app
COPY . .

# Create build
RUN npm install && npm run build

# Stage 2 Run process

# Declare image
FROM nginx:stable-alpine

# Get build from stage 1 and copy nginx config
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Run app
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]