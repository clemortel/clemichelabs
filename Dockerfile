FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run generate

FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 3000
RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf
