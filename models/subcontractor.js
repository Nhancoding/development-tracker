const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class subcontractor extends Model {}

subcontractor.init({
    // salary:{
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     validate:{
    //         len:[1]
    //     }   
    // },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }
    }, 
    contract_id: {
        type: DataTypes.INTEGER,
        references:{
            model:"contracts",
            key:"id"
        }
    }
},{
    sequelize,
    modelName:"subcontractor"
});

module.exports=subcontractor