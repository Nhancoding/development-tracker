const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3000;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
      maxAge:1000*60*60*2
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};
app.use(session(sess));
//codes below allow us to interpret data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(allRoutes);

app.get("/sessions",(req,res)=>{
  res.json(req.session)
})



const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.get("/", (req, res) => {
  res.render("login-signup",{isLoggedIn:false});
});



sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});
