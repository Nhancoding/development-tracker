const User = require("./User");
const projects = require("./projects");
const contracts = require("./contracts")
const subcontractor = require("./subcontractor")


projects.belongsTo(User,{
    onDelete:"CASCADE"
});
User.hasMany(projects);

contracts.belongsTo(projects,{
    onDelete:"CASCADE"
})
projects.hasMany(contracts)

subcontractor.belongsTo(contracts,{
    onDelete:"CASCADE"
})


module.exports = {
    User,
    projects,
    contracts,
    subcontractor
}