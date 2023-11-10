const {Router} = require("express");
const {Order , Product , User} = require("../db");
const {Sequelize} = require("sequelize");
const checkAuth = require("../middleware/auth");
const checkRoleAuth = require("../middleware/roleAuth");
const express = require ("express");
const {getAllOrderUser} = require ("../helpers/utils.js");
const router = express();


router.get("/allOrderByUser/:idUser" , async (req, res)=>{
        try {
        const {idUser} = req.params;
        const response = await getAllOrderUser(idUser);
        res.status(200).json(response);

        }catch(error){
            res.status(500).send("Error servidor");
        }
})



      
     

     

      




module.exports= router;