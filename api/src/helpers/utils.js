const {User , Product , Order} = require   ("../db.js");


 const getAllUsers = async () => {
    let users = await User.findAll({
      include: [
        {
          model: Order,
          attributes: [ 'id' , 'products', 'totalPrice'],
          through: {
            attributes: []
          }
        }
      ]
    });
  
    // FORMATEO
    users = users.map((user) => {
      return {
        id: user._id,
        name : user.name, 
        surname: user.surname,
        address : user.address,
        email: user.email,
        role: user.role,
        orders: user.Orders.map((order) => {
          return {
            idOrder : order.id,
            products: order.products,
            total: parseFloat(order.totalPrice),
          };
        }),
  
        userCreated: true,
      };
    });
  
    return users;
  };


 


  const getAllOrderUser = async (userId) => {
    try {
      const user = await User.findOne({
        where: { _id: userId },
        include: [
          {
            model: Order,
            attributes: ['id', 'products', 'totalPrice'],
            through: {
              attributes: [],
            },
          },
        ],
      });
  
      // Verificar si el usuario existe
      if (!user) {
        return { error: 'Usuario no encontrado' };
      }
  
      // Formatear la respuesta
      const formattedUser = {
        id: user._id,
        name: user.name,
        surname: user.surname,
        address: user.address,
        email: user.email,
        role: user.role,
        orders: user.Orders.map((order) => ({
          idOrder: order.id,
          products: order.products,
          total: parseFloat(order.totalPrice),
        })),
        userCreated: true,
      };
  
      return formattedUser;
    } catch (error) {
      console.log("Error al buscar usuario con órdenes:", error);
      return { error: 'Error interno del servidor' };
    }
  };
 
  
  
  
  
  



  module.exports = {
   getAllUsers,
   getAllOrderUser
}