const express = require("express");

const allRoutes = require("./controllers")

const sequelize = require("./config/connection");

const app = express();
const PORT = process.envPORT || 3000;

const { User,projects,contracts,subcontractor} = require("./models")

//codes below allow us to interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(allRoutes);
app.get("/", (req, res) => {
  res.send("Hello welcome to development tracker!");
});

sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});
