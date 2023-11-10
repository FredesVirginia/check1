const {Router} = require("express");
const {Order , Product} = require("../db");
const {Sequelize} = require("sequelize");
const checkAuth = require("../middleware/auth");
const checkRoleAuth = require("../middleware/roleAuth");
const express = require ("express");

const router = express();




      router.get("/", checkAuth  ,  async (req, res)=>{
           try{
            const allUsers = await Product.findAll();
            console.log("Los user son" , allUsers );
            res.status(200).json(allUsers);
            
              
          }catch(error){
              res.status(404);
              res.send("User not Login");
          }
      });


      router.get("/listName", async (req, res) => {
        try {
          const allProducts = await Product.findAll();
          
          // Extraer solo los nombres de los productos en un nuevo array
          const productNames = allProducts.map((product)=>{
            return (
             {
              id: product.id,
               name: product.name ,
              price : product.price
             }
            )
          });
       
          console.log("Los nombres de los productos son:", productNames);
          res.status(200).json(productNames);
        } catch (error) {
          res.status(404);
          res.send("Usuario no ha iniciado sesión");
        }
      });
      
      

      router.post("/add" , async (req, res)=>{
            try{
                const {name , description , price , quantity} = req.body;
                const newProduct = await Product.create({name , description , price, quantity});
                res.status(200);
                res.send(newProduct);
            }catch(error){
                res.status(500);
                res.send("ui algo salio mal");
            console.log(error);
            };
      });

      


     

     

      




module.exports= router;