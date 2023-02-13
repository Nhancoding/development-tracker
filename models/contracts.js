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
        
    },
    projectId:{
        type: DataTypes.INTEGER,
        references:{
            model:"projects",
            key:"id"
        }
    }

},{
    sequelize,
    modelName:"contracts"
});

module.exports=contracts