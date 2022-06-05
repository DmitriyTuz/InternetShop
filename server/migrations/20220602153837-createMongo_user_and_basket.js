'use strict';

const { User, Type, Brand, Device } = require('../models/index')

const userM = require('../models-mongo/userM')
const Baskets = require('../models-mongo/Baskets')

module.exports = {
  async up (queryInterface, Sequelize) {

    let users = await User.findAll();
    for ( let i = 0; i <= users.length - 1; i++ ) {
      await userM.create({name: users[i].name, email: users[i].email})
//
    };

  },

  async down (queryInterface, Sequelize) {

  }
};
