const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require ('../config.js');
// const massive = require('massive');
// const session = require('express-session');
// const config = require('./config.js');
// const passport = require('passport');

let app = module.exports = express();
app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json());
mongoose.connect(config.mongo);
mongoose.connection.once('open',() => console.log('Connected to Mongo'));
// app.use(session({secret: 'some-random-string'})); //must come before initialize and session
// app.use(passport.initialize());// must come before app.use(passport.session)
// app.use(passport.session());
var createAccount = require('./controllers/account/createAccountController.js');
app.post('/api/signup', createAccount.signup);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
