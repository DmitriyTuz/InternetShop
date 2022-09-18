const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

const {User, Role} = require('../models/index')

module.exports = function (roles) {
    return async function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfgfghhgsdf
            if (!token) {
                return res.status(401).json({message: "Пользователь не авторизован"})
            }

            const {id: userId} = jwt.verify(token, process.env.SECRET_KEY)

            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            console.log('decoded = ', decoded)

            let user = await User.findAll({where: {id: userId},
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

            let userRoles = []
            let roles1 = user[0].dataValues.Roles
            // console.log('user = ', user[0].dataValues.Roles[0].dataValues.value)

            for (let i=0; i<roles1.length; i++ ) {
                userRoles.push(roles1[i].dataValues.value)
            }

            console.log('arrayRoles = ', userRoles)

            let hasRole = false
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return next(ApiError.badRequest('У вас нет доступа !'))
            }
            next()
        } catch (e) {
            res.status(401).json({message: e.message})
        }
    }
}