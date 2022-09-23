'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Basket, { onDelete: "cascade" })
      User.hasMany(models.Rating, { onDelete: "cascade" })
      User.hasMany(models.Message, { onDelete: "cascade" })
      User.belongsToMany(models.Room, { through: models.User_Room })
      User.belongsToMany(models.Role, { through: models.User_Role })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    role: { type: DataTypes.ARRAY(DataTypes.STRING) },
    // role: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: ["USER"] },
    // role: { type: DataTypes.STRING, defaultValue: 'USER'},
    socketId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};