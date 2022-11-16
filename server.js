const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});


// copy and paste to create a connection to test routes


//schema first
//models
//server.js with sequelize sync
//test to make sure it will run
//seeds cuz now it will take information


//routes


//final step is front end
