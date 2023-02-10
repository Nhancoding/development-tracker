const express = require("express");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.envPORT || 3000;

const { User,projects,contracts,subcontractor} = require("./models")

app.get("/", (req, res) => {
  res.send("Hello welcome to development tracker!");
});

sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});
