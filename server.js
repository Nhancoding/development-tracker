const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const allRoutes = require("./controllers")

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

//codes below allow us to interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(allRoutes);
app.get("/", (req, res) => {
  res.send("Hello welcome to development tracker!");
});

// sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
// });
