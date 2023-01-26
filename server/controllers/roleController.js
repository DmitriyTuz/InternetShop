const {Role} = require('../models/index')
// const db = require('../models/index')
const sequelize = require('../db')

class RoleController {

    async createRole(req, res) {

        let transaction = await sequelize.transaction();
        // await Role.destroy({ where: {id: 1}, transaction });

        const {value} = req.body
        const role = await Role.create({value}, /*{ transaction: transaction }*/);
        // await transaction.commit();
        // if (transaction) await transaction.rollback();
        return res.json(role)
    }

    async getAll(req, res) {
        const roles = await Role.findAll()
        return res.json(roles)
    }

    async getById(req, res, next) {
        // try {
            const {id} = req.params
            if (!id) {
                res.sendStatus(404)
            }
            // res.sendStatus(200)
            const role = await Role.findOne({
                where: {id}
            })
            return res.json(role)
        // } catch (e) {
        //     next(ApiError.badRequest(e.message))
        // }
    }

    async deleteRole(req, res) {
        await Role.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.send("успешное удаление")
    }

}

module.exports = new RoleController()