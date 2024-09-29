# Build React App
FROM node:18-alpine3.18 AS build
WORKDIR /app

# Install pnpm 
RUN npm install -g pnpm

# Copy to package.json files
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy other files and start to build
COPY . .
RUN pnpm build

# Server with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html

# Remove remaing Nginx html folder
RUN rm -rf ./*

# Copy to build file to nginx folder
COPY --from=build /app/dist .

# Export port
EXPOSE 80

# Start to nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]