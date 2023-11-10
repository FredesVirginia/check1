 const {Router} = require ('express');
 const userRoute = require('./users');
 const orderRoute = require('./orders') ;
 const authRoute = require('./auth');
 const productRoute = require('./products');
 const router = Router();

 router.use('/users' , userRoute);
// router.use('/orders', orderRoute);
router.use('/auth' , authRoute  );
router.use('/products' , productRoute);

 module.exports = router;