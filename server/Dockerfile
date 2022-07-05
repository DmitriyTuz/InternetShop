FROM node:14-slim

RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app/server

COPY package.json .
COPY package-lock.json .

RUN npm install
#RUN npm install db-migrate-pg

COPY . .

# This is our secret sauce
#RUN git clone https://github.com/vishnubob/wait-for-it.git

#RUN npm run build

COPY config/config.docker.js config/config.js

#COPY .env .

EXPOSE 5000

#RUN npx sequelize-cli db:migrate

#ENTRYPOINT ["sh", "entrypoint.sh"]

CMD ["npm", "start"]


































































































