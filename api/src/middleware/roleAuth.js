
const { verifyToken } = require('../helpers/generateToken')
const {User} = require("../db");

//TODO este middlewre verifica que el Usario tenga un token valido

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        console.log("Por el CheckRoleAuth");
        const token = req.headers.authorization.split(' ').pop() //TODO: 231231321
        console.log("El token es " , token);
        const tokenData = await verifyToken(token)
        const userData = await User.findByPk(tokenData._id) //TODO: 696966

        //TODO ['user'].includes('user')
        if ([].concat(roles).includes(userData.role)) { //TODO:
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = checkRoleAuth