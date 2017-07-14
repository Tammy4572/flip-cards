const express = require('express');
const fs = require('file-system');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const mustacheExpress = require('mustache-express');
const data = require('./data.json');
const session = require('express-session');
const usersrouter = require('./routes/user');
const flipcardRouter = require('./routes/flipcard');

const application = express();

application.engine('mustache', mustacheExpress());
application.set('views', './views');
application.set('view engine', 'mustache');

application.use(session({
    secret: 'smellycat',
    saveUninitialized: true,
    resave: false
}));
application.use(express.static(__dirname + '/public'));

application.use(bodyParser.urlencoded());

application.use(usersrouter);
application.use(flipcardRouter);

application.listen(3000);

module.exports = application;