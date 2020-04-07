### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build /usr/src/app/srcserver/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN echo "<script>window.backend_url='http://35.163.192.12';</script>" >> /usr/share/nginx/html/index.html

EXPOSE 80