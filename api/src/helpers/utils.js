const {User , Product , Order} = require   ("../db.js");


 const getAllUsers = async () => {
    let users = await User.findAll({
      include: [
        {
          model: Order,
          attributes: ['products', 'totalPrice'],
          through: {
            attributes: []
          }
        }
      ]
    });
  
    // FORMATEO
    users = users.map((user) => {
      return {
        id: user.id,
        name : user.name, 
        surname: user.surname,
        address : user.address,
        email: user.email,
  
        orders: user.Orders.map((order) => {
          return {
            products: order.products,
            total: parseFloat(order.totalPrice),
          };
        }),
  
        userCreated: true,
      };
    });
  
    return users;
  };



  module.exports = {
   getAllUsers
}