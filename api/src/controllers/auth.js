const {encrypt , compare} = require("../helpers/handleBcrypt");
const {tokenSign} = require("../helpers/generateToken");
const {User} =require ("../db.js");


//TODO Login!    
const loginCtrl = async (req, res) =>{
    try{
        const {email , password} = req.body;
        const user = await User.findOne({
            where: {
              email: email
          }});

        if(!user){
            res.status(404);
            res.send({error : "User no Found"})
        }

        //TODO Contrasesa
        const checkPassword = await compare(password , user.password);

        //TODO JWT

        const tokenSession = await tokenSign(user);

        if(checkPassword){
            res.send({
                data:user,
                tokenSession
            })
            return
        }

        if(!checkPassword){
            res.status(409);
            res.send({
                error : "Invalid Passowird"
            })
            return

        }
    }catch(error){
            res.status(500);
            res.send(error)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async (req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { name, surname, email, password, address , role } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
        const registerUser = await User.create({
           
          name ,
          surname,
          email,
          address,
          role,
          password: passwordHash
        })
        console.log("El user registrado es " , registerUser);
        res.send({ data: registerUser })

    } catch (e) {
       res.status(500);
       console.log("El erroe fue " , e)
    }
}



module.exports = { loginCtrl, registerCtrl }