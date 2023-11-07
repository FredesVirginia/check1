 const {Router} = require ('express');
 const userRoute = require('./users');
 const orderRoute = require('./orders') ;
 const authRoute = require('./auth');

 const router = Router();

 router.use('/users' , userRoute);
// router.use('/orders', orderRoute);
router.use('/auth' , authRoute  );

 module.exports = router;