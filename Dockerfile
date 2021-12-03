FROM node:16-alpine

WORKDIR /usr/src/app

RUN chmod 755 /usr/src/app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

EXPOSE 9000

# CMD [ "npm", "run", "prod" ]
CMD [ "npm", "run", "dev" ]