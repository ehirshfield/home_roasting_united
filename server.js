// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var passport = require('passport');
var flash = require('connect-flash');
var passportConfig = require('./config/passport.js');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

// Sets up the Express App
var app = express();

//Sets the ports to the env or defaults to 8080
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

//Sets up app to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Allows app to use the static pages inside public
app.use(express.static(path.join(__dirname, '/public')));

//HTML POST and DELETE https requests
app.use(methodOverride("_method"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(flash());

// Routes
// Feed in express to be used in the routes
require("./routes/all-routes.js")(app);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
