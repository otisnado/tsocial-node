FROM node:16.14.0-alpine

WORKDIR /usr/src/app

ENV PORT=80

EXPOSE 80

COPY . ./

RUN npm install

ENTRYPOINT ["npm", "start"]