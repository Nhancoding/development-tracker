const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class contracts extends Model {}

contracts.init({
    // crew:{
    //     type: DataTypes.STRING,
    //     allowNull:false,
    //     validate:{
    //         len:[1]
    //     }   
    // },
    jobdescription: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        }   
    }
},{
    sequelize,
});

module.exports=contracts