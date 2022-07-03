FROM node:14-slim

RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]




