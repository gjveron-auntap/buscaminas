FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --only=production
COPY . .

EXPOSE 80
CMD [ "npm", "run", "start"]