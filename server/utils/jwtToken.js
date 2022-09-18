const jwt = require('jsonwebtoken')

class jwtToken {

    createToken(id, name, email, role) {
        return jwt.sign(
            {id, name, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
    }

    verifyToken(token) {
        return jwt.verify(
            token,
            process.env.SECRET_KEY,
            {expiresIn: '24h'})
    }
}

module.exports = new jwtToken()



