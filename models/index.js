const User = require("./User");
const Projects = require("./projects");
const Contracts = require("./contracts")



Projects.belongsTo(User,{
    onDelete:"CASCADE",
   
});
User.hasMany(Projects),

Contracts.belongsTo(Projects,{
   onDelete:"CASCADE"
});
Projects.hasMany(Contracts)





module.exports = {
    User,
    Projects,
    Contracts,
    // subcontractor
}