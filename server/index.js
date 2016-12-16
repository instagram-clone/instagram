const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const massive = require('massive');
// const session = require('express-session');
// const config = require('./config.js');
// const passport = require('passport');

let app = module.exports = express();
app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json());
// app.use(session({secret: 'some-random-string'})); //must come before initialize and session
// app.use(passport.initialize());// must come before app.use(passport.session)
// app.use(passport.session());
app.listen(3000, function(){
  console.log('listening on port 3000');
});
