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
})
const s3 = new AWS.S3();


//adding photos to bucket
//Amzon S3
const createAccount = require('./controllers/account/createAccountController.js');
const loginController = require('./controllers/account/loginController');

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
app.post('/api/s3', function(req, res, next){
  console.log(req.body);
  var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  // bucketName var below crates a "folder" for each user
  var bucketName = 'ig-clone';
  var params = {
      Bucket: bucketName
    , Key: req.body.imageName
    , Body: buf
    , ContentType: 'image/' + req.body.imageExtension
    , ACL: 'public-read'
  };

  s3.upload(params, function (err, data) {
    console.log(err, data);
    if (err) return res.status(500).send(err);

    // TODO: save data to mongo
    res.json(data);
  });
});

app.post('/api/signup', createAccount.signup);
app.get('/api/login', loginController.login);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
