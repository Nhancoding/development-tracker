const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class projects extends Model {}

projects.init({
    cost:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            len:[1]
        }   
    },
    deadline: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        }   
    },
    status:{
        type:DataTypes.BOOLEAN
    }
},{
    sequelize,
});

module.exports=projects