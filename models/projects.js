const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class projects extends Model {}

projects.init({
    
    name:{
        type: DataTypes.STRING,
         allowNull:false,
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
    description: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate:{
            len:[1]
    }}
    ,

    // public_id:{
    //     type: DataTypes.STRING,
        
    // },
    url:{
        type: DataTypes.STRING
    }
    
},{
    sequelize,
    modelName:"projects"
});

module.exports=projects