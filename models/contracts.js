const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class contracts extends Model {}

contracts.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }
    },
    description: {
         type: DataTypes.TEXT,
         allowNull:false,
         validate:{
            len:[1]
        }   
    },
    cost: {
         type: DataTypes.DOUBLE,
         allowNull:false,
        
    }
  


},{
    sequelize,
    modelName:"contracts"
});

module.exports=contracts