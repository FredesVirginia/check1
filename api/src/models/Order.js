
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Order', {  
      id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
         },

      products : {
        type : DataTypes.STRING,
        allowNull: false,
      },
  
    
  
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  
     
  
     
  
     
     
    });
  };