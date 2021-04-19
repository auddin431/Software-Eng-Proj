var express = require('express');
var router = express.Router();
var UserModel = require('../models/Users.js');
var jwt = require('jsonwebtoken');
const authToken = require('../middleware.js');
var mdb = require('mongoose');
require('dotenv').config();

var connection_uri = process.env.MONGODB_URI;
var login_conn = mdb.createConnection(connection_uri, function(err) {
  if (err) {
    console.log('Error: failed to connect to Mongoose Database')
    throw err;
  } else {
    console.log('Successfully connected to Mongoose Database');
  }
});
var User = login_conn.model('User', UserModel.schema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
  Sets up a post route for registration. This will be the route used
  onClick when registering.
*/
router.post('/register', function(req, res) {
  console.log("Recived registration request...");
  const {first_name, last_name, email, password} = req.body;
  const user = new User({first_name, last_name, email, password});
  user.save(function(err) {
    if(err) {
      res.status(500).send("Error registering new user, please try again.");
      console.log(err);
    } else {
      res.status(200).send("User now successfully regsitered!");
    }
  });
});

/*
  Used to authenticate a user who is attempting to login. This
  is the onClick for the login button.
*/
router.post('/authenticate', function(req, res) {
  const {email, password} = req.body;
  User.findOne({email}, function(err, user) {
    if(err) {
      console.error();
      res.status(500).json({error: 'Error Finding User - Code 500'});
    } else if(!user) {
      res.status(401).json({error: 'Email could not be found - Code 401'});
    } else {
      user.authPassword(password, function(err, match) {
        if(err) {
          res.status(500).json({error: 'Error Authenticating User - Code 500'});
        } else if(!match) {
          res.status(401).json({error: 'Email or password is incorrect - Code 401'});
        } else {
          const token = jwt.sign({usrEmail: email}, process.env.JWT_SECRET, {expiresIn: '15m'});
          res.cookie('token', token, {httpOnly: true, secure: true}).sendStatus(200);
          res.cookie('email', email, {maxAge: '15m'});
        }
      });
    }
  });
});

/*
  Used to authenticate a users token before rendering/serving a
  protected route.
*/
router.get('/checkToken', authToken, function(req, res) {
  res.sendStatus(200);
  res.cookie('email', req.email, {maxAge: '15m'});
});

module.exports = router;
