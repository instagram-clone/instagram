const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require ('../config.js');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const AWS = require('aws-sdk');

//Amazon S3
//creating amazon bucket
AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region,
});
//adding photos to bucket
//Amzon S3
const createAccount = require('./controllers/account/createAccountController.js');
const loginController = require('./controllers/account/loginController');
const editProfileController = require('./controllers/account/editProfileController');
const getProfileInfo = require('./controllers/account/getProfileInfo');

const app = module.exports = express();
app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: config.facebookId,
  clientSecret: config.facebookSecret,
  callbackURL: config.baseDomain + '/auth/facebook/callback'
}, function(token, refreshToken, profile, done){

  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: config.baseDomain + '/#/feed',
    failureRedirect: '/login' //never put your starting url here
}), function(req, res){
  console.log(req.session);
});

passport.serializeUser(function(user, done) {
  done(null, user);
}); //preps data to put on session

passport.deserializeUser(function(user, done) {
  done(null, user);
});//gets data from session and preps for req.user


app.get('/user', function(req, res){
  res.send(req.user);
});


mongoose.connect(config.mongo);
mongoose.connection.once('open',() => console.log('Connected to Mongo'));
//amazon post
app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: 'ig-clone',
  region: 'us-east-1',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'private'
}));

app.post('/api/signup', createAccount.signup);
app.get('/api/login', loginController.login);
app.get('/api/currentUser/:username', editProfileController.getUser);
app.post('/api/currentUser', editProfileController.postUser);
app.get('/api/profileinfo/:username', getProfileInfo.readProfileInfo);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
