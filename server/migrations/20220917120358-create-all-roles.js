'use strict';

const { Role } = require('../models/index')

module.exports = {
    async up (queryInterface, Sequelize) {

        await Role.create({ value: 'USER'}),
        await Role.create({ value: 'ADMIN'}),
        await Role.create({ value: 'DESIGNER'}),
        await Role.create({ value: 'WORKER'})

    },

    async down (queryInterface, Sequelize) {

    }
};