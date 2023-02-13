const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class contracts extends Model {}

contracts.init({
    jobdescription: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        }   
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    projectId: {
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