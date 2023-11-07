
const { verifyToken } = require('../helpers/generateToken')

const checkAuth = async (req, res, next) => {
    console.log("POR EL cheacj auth")
    try {
        //TODO: authorization: 
        const token = req.headers.authorization.split(' ').pop() 
        const tokenData = await verifyToken(token)
        console.log("Por el check aut" , tokenData)
        if (tokenData._id) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Tu por aqui no pasas!' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = checkAuth