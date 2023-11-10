const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Product', {  
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
         },
  
    
  
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  
     quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
     
     
    });
  };