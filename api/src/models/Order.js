module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Order', {  
      id:{
        type: DataTypes.UUID,
        
        primaryKey: true,
        allowNull: false,
        unique: true
         },
  
    
  
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  
     
  
     
  
     
     
    });
  };