const {DataTypes}  = require("sequelize");
const sequelize  = require("../util/connection");


const compound = sequelize.define(
    "Compound",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    }, 
    {
      timestamps: true,
    }
  );


  module.exports = compound;