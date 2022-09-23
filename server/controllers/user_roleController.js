const {User, User_Role, Role} = require('../models/index')
const ApiError = require('../error/ApiError')

class UserRoleController {

    // добавление юзеру с введённым id роли с введённым названием
    async create(req, res, next) {
        try {
            const {id, RoleValue} = req.query
            if (!id || !RoleValue) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }

            let user = await User.findOne({where: {id: id}})
            if (!user) {
                return next(ApiError.badRequest('Пользователя с таким id не существует'))
            }

            let role = await Role.findOne({where: {value: RoleValue}})
            if (!role) {
                return next(ApiError.badRequest('Такая роль не существует'))
            }

            const candidateRole = await User_Role.findOne({where: {UserId: id, RoleId: role.id}})
            if (candidateRole) {
                return next(ApiError.badRequest('У данного пользователя уже есть такая роль !'))
            }

            const userRole = await User_Role.create({UserId: id, RoleId: role.id})
            return res.json(userRole)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const userRoles = await User_Role.findAll()
            return res.json(userRoles)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // получение всех юзеров с ролями
    async getAllUsersWithRoles(req, res, next) {
        try {
            const user = await User.findAll({
                attributes: ["id", "name"],
                include: [{
                    model: Role, attributes: ["id", "value"],
                    required: false
                }]
            })
            return res.json(user)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // получение юзера с ролями по id
    async getUserWithRolesByUserId(req, res, next) {
        try {
            const {id} = req.query
            let user = await User.findOne({
                where: {id},
                attributes: ["id", "name"],
                include: [{
                    model: Role, attributes: ["id", "value"],
                    required: false
                }]
            })
            return res.json(user)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // получение массива ролей юзера по id
    async getArrayOfUserRolesByUserId(req, res) {
        const {id} = req.query
        let user = await User.findAll({where: {id},
            attributes: ["name"],
            include: [{
                model: Role, attributes:["id","value"],
                required: false
            }]
        })

        let arrayRoles = []
        let roles = user[0].Roles
        // console.log('user = ', user[0].dataValues.Roles[0].dataValues.value)
        // console.log('user = ', user[0].Roles[0].value)
        for (let i=0; i<roles.length; i++ ) {
            arrayRoles.push(roles[i].value)
        }

        console.log('arrayRoles = ', arrayRoles)
        return res.json(arrayRoles)
    }


    // удаление у юзера роли по введённым id юзера и id роли
/*    async deleteRoleFromUserWithIdByRoleId(req, res) {
        const {UserId, RoleId} = req.query
        await User_Role.destroy({
            where: {
                UserId: UserId,
                RoleId: RoleId
            }
        })
        return res.send("успешное удаление")
    }*/

    // удаление у юзера роли по введённым id юзера и названию роли
    async deleteRoleFromUserWithIdByRoleValue(req, res, next) {
        try {
            const {id, RoleValue} = req.query
            if (!id || !RoleValue) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }
            let user = await User.findOne({where: {id: id}})
            if (!user) {
                return next(ApiError.badRequest('Пользователя с таким id не существует'))
            }

            let role = await Role.findOne({where: {value: RoleValue}})
            if (!role) {
                return next(ApiError.badRequest('Такая роль не существует'))
            }

            await User_Role.destroy({
                where: {
                    UserId: id,
                    RoleId: role.id
                }
            })
            return res.send("успешное удаление")
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // удаление у юзера с введённым id всех ролей
    async deleteAllRolesFromUserByUserId(req, res) {
        const {id} = req.query
        await User_Role.destroy({
            where: {
                UserId: id
            }
        })
        return res.send("успешное удаление")
    }

    async changeOldRoleOnNewRoleByUserId (req, res, next) {
        try {
            const {id, oldRoleValue, newRoleValue } = req.query
            if (!id || !oldRoleValue || !newRoleValue) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }
            let user = await User.findOne({where: {id: id}})
            if (!user) {
                return next(ApiError.badRequest('Пользователя с таким id не существует'))
            }
            let oldRole = await Role.findOne({where: {value: oldRoleValue}})
            if (!oldRole) {
                return next(ApiError.badRequest('Роль которую вы хотите заменить не существует'))
            }
            let newRole = await Role.findOne({where: {value: newRoleValue}})
            if (!newRole) {
                return next(ApiError.badRequest('Роль на которую вы хотите заменить не существует'))
            }

            await User_Role.update(
                {
                    RoleId: newRole.id
                },
                {
                    where: {
                        UserId: id,
                        RoleId: oldRole.id
                    }
                }
            );
            return res.send("успешное обновление")

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new UserRoleController()