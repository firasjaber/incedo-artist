FROM node:16-alpine

WORKDIR /usr/src/app

RUN chmod 755 /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD [ "npm", "run", "prod" ]