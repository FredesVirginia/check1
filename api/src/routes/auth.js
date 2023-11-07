const express = require("express");
const router = express.Router();

const {loginCtrl , registerCtrl} = require("../controllers/auth");

//TODO Login
router.post("/login" , loginCtrl);

//TODO : Register un usuario

router.post("/register" , registerCtrl);


module.exports = router;