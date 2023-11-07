const {Router} = require("express");
const {Order , Product} = require("../db");
const {Sequelize} = require("sequelize");
const checkAuth = require("../middleware/auth");
const checkRoleAuth = require("../middleware/roleAuth");
const express = require ("express");

const router = express();




      router.get("/", checkAuth , checkRoleAuth(["user"]) ,  async (req, res)=>{
           try{
            res.status(200);
            res.send("USER HOLA")
              
          }catch(error){
              res.status(404).json(error);
          }
      });

     

     

      




module.exports= router;