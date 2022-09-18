const {Role} = require('../models/index')

class RoleController {

    async create(req, res) {
        const {value} = req.body
        const role = await Role.create({value})
        return res.json(role)
    }

    async getAll(req, res) {
        const roles = await Role.findAll()
        return res.json(roles)
    }
}

module.exports = new RoleController()