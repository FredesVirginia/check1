const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {  
    id:{
      type: DataTypes.UUID,
     
      primaryKey: true,
      allowNull: false,
      unique: true
       },

    userCreated: {
      type: DataTypes.BOOLEAN,
      default: true,
      },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

   password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address : {

        type: DataTypes.STRING,
        allowNull: false,   
    }
   
  });
};