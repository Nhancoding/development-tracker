const User = require("./User");
const projects = require("./projects");
const contracts = require("./contracts")
// const subcontractor = require("./subcontractor")


projects.belongsTo(User,{
    onDelete:"CASCADE",
    foreignKey:"UserId"
});
User.hasMany(projects, {
    onDelete:"CASCADE",
    foreignKey:"UserId"
});


contracts.belongsTo(projects,{
    onDelete:"CASCADE"
    // foreignKey:"project_id" 
});
projects.hasMany(contracts,{
    onDelete:"CASCADE"
    // foreignKey:"project_id" 
});

// subcontractor.belongsTo(contracts,{
//     onDelete:"CASCADE"
    // foreignKey:"contract_id"
// });




module.exports = {
    User,
    projects,
    contracts,
    // subcontractor
}