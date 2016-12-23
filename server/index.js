const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require ('../config.js');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const AWS = require('aws-sdk');
const s3ExpressRouter = require('express-s3-router');

//Amazon S3
//creating amazon bucket
AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region,
});
//adding photos to bucket
//Amzon S3
const s3 = new AWS.S3();

const createAccount = require('./controllers/account/createAccountController.js');
const loginController = require('./controllers/account/loginController');
const editProfileController = require('./controllers/account/editProfileController');
const getProfileInfo = require('./controllers/account/getProfileInfo');
const changePasswordController = require('./controllers/account/changePasswordController');
const postCtrl = require('./controllers/photos/postCtrl');
const followUserCtrl = require('./controllers/feed/followUserCtrl');
const unfollowUserCtrl = require('./controllers/feed/unfollowUserCtrl');
const feedCtrl = require('./controllers/feed/getUsersPostsCtrl');
const favoriteCtrl = require('./controllers/photos/favoriteCtrl');
const commentCtrl = require('./controllers/photos/postCommentCtrl');


const app = module.exports = express();

app.use(express.static(__dirname + './../public/dist'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
  var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  var params = {
      Bucket: 'ig-clone'
    , Key: req.body.imageName
    , Body: buf
    , ContentType: req.body.imageExtension
    , ACL: 'public-read'
  };
  s3.upload(params, function (err, data) {
    console.log(err, data);
    if (err) return res.status(500).send(err);

    // TODO: save data to mongo
    res.json(data);
  });
})

// app.post('/api/s3test', (req, res) => {
//   console.log(req.body);
// })
app.post('/api/signup', createAccount.signup);
app.get('/api/login', loginController.login);
app.get('/api/currentUser/:username', editProfileController.getUser);
app.post('/api/currentUser', editProfileController.postUser);
app.get('/api/profileinfo/:username', getProfileInfo.readProfileInfo);
app.post('/api/changePassword', changePasswordController.postPassword);
app.get('/api/postcount/:id', getProfileInfo.getPostCount);
app.post('/api/postPhoto', postCtrl.postPhoto);
app.post('/api/favorite', favoriteCtrl.favorite);
app.post('/api/unfavorite', favoriteCtrl.unfavorite);
app.put('/api/followuser/:username', followUserCtrl.followUser);
app.put('/api/addfollower/:username', followUserCtrl.addFollower);
app.put('/api/unfollowuser/:username', unfollowUserCtrl.unfollowUser);
app.put('/api/removefollower/:username', unfollowUserCtrl.removeFollower)
app.get('/api/feed', feedCtrl.getFeed);
app.post('/api/postComment', commentCtrl.postComment);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
