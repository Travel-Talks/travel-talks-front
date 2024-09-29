# Build React App
FROM node:alpine3.18 as build
WORKDIR /app
COPY packages.json .
RUN pnpm install
COPY . .
RUN pnpm build

# Server with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]