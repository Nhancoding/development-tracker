const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class projects extends Model {}

projects.init({

    name:{
        type: DataTypes.STRING,
        allowNull:flase,
        validate:{
            len:[1]
        }
    },
    deadline:{
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        }   
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        validate:{
            len:[1]
    }}
    // UserId:{
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     validate:{
    //         len:[1]
    //     }   
    // }
    // ,id: {
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     autoIncrement:true,
    //     primaryKey:true
    // }
},{
    sequelize,
    modelName:"projects"
});

module.exports=projects