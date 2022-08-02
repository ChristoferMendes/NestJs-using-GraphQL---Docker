FROM node:12-alpine

WORKDIR /home/api

COPY package.json .
COPY package-lock.json .

RUN npm install && npm i --save @nestjs/config

COPY . . 

CMD npm run start:dev