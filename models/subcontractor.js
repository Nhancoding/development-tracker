const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class subcontractor extends Model {}

subcontractor.init({
    salary:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            len:[1]
        }   
    }
},{
    sequelize,
});

module.exports=subcontractor