const sequelize = require("../config/connection");
const { User, subcontractor } = require("../models");

const subcontractorSeeds = require("./subcontractorData.json")
const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            name:"Nhan",
            email:"nhan@nhan.nhan",
            password:"password"
        },
        {
            name:"Andrew",
            email:"andrew@andrew.andrew",
            password:"password"
        },
        {
            name:"Tyler",
            email:"tyler@tyler.tyler",
            password:"password"
        },
        {
            name:"Connor",
            email:"connor@connor.connor",
            password:"password"
        }
    ],{
        individualHooks:true
    })
    const subcontracts = await subcontractor.bulkCreate(subcontractorSeeds);
}

seed();