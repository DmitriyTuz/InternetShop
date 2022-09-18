const {User, User_Role, Role} = require('../models/index')

class UserRoleController {

    async create(req, res) {
        const {UserId, RoleId} = req.body
        const userRole = await User_Role.create({UserId, RoleId})
        return res.json(userRole)
    }

    async getAll(req, res) {
        const userRoles = await User_Role.findAll()
        return res.json(userRoles)
    }

    // get users with roles
    async getArrayOfUserRoles(req, res) {
        let name = req.query.name
        let user = await User.findAll({where: {name: name},
            attributes: ["name"],
            include: [{
                // model: User_Role, attributes:["id"],
                // required: false,
                // include: [{
                    model: Role, attributes:["id","value"],
                    required: false
                // }]
            }]
        })

        let arrayRoles = []
        let roles = user[0].dataValues.Roles
        // console.log('user = ', user[0].dataValues.Roles[0].dataValues.value)

        for (let i=0; i<roles.length; i++ ) {
            arrayRoles.push(roles[i].dataValues.value)
        }

        console.log('arrayRoles = ', arrayRoles)
        return res.json(arrayRoles)
    };
}

module.exports = new UserRoleController()