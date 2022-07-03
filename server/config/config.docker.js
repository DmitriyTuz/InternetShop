module.exports =
{
  "host": "localhost",
  "port": "5432",
  "username": "postgres",
  "password": "1111",
  "database": "intshop",
  "dialect": "postgres",
  "protocol": "postgres",
  // "synchronize": true,
  "logging": false,

  "migrations": ["migrations/"],

  "cli": {
    "migrationsDir": "migrations"
  },

  "dialectOptions": {
    "ssl": {
      "require": false,
      "rejectUnauthorized": false
    }
  }

}