require('dotenv').config()

module.exports =
{
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT || 'postgres',
    "protocol": process.env.DB_PROTOCOL,
    "port": process.env.DB_PORT,

    "dialectOptions": {
             "ssl": {
               "require": process.env.NODE_ENV == 'development',
               "rejectUnauthorized": false
             }
           }
}