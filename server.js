const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

//codes below allow us to interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.get("/", (req, res) => {
  res.render("login-signup",{isLoggedIn:false});
});
app.use(allRoutes);


sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});
