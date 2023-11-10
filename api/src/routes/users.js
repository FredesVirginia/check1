const {Router} = require("express");
const {Order , Product , User} = require("../db");
const {Sequelize} = require("sequelize");
const checkAuth = require("../middleware/auth");
const checkRoleAuth = require("../middleware/roleAuth");
const express = require ("express");
const {getAllUsers} = require ("../helpers/utils.js");
const router = express();




      router.get("/" ,  async (req, res)=>{
           try{
            const allUsers = await getAllUsers();
            console.log("Los user son" , allUsers );
            res.status(200).json(allUsers);
            
              
          }catch(error){
              res.status(404);
              res.send("User not Login");
          }
      });


      router.post("/newOrder", async (req, res) => {
        try {
          const { order, idUser } = req.body;
          console.log("Los datos recibidos desde el back son", order.products, order.totalOrder, idUser);
      
          // Verifica si el usuario existe
          const user = await User.findOne({ where: { _id: idUser } });
          if (!user) {
            console.log("Usuario no encontrado");
            return res.status(404).json({ error: "User not found" });
          }
      
          const newOrder = await Order.create({
            products: order.products,
            totalPrice: order.totalOrder,
          });
      
          await user.addOrder(newOrder);
      
         
          
      
         
          res.status(200);
          res.json({message : "Pedido Exitoso!"});
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
      
      
     

     

      




module.exports= router;