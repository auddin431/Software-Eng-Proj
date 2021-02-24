var express = require('express');
const app = require('../app.js');
var router = express.Router();
var User = require('../modles/Users.js');
var jwt = require('jsonwebtoken');
const authToken = require('../middleware.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
  Sets up a post route for registration. This will be the route used
  onSubmit when registering.
*/
router.post('/register', function(req, res) {
  const {email, password} = req.body;
  const user = new User({email, password});
  user.save(function(err) {
    if(err) {
      res.status(500).send("Error registering new user, please try again.");
    } else {
      res.status(200).send("User now successfully regsitered!");
    }
  });
});


/*
  Used to authenticate a user who is attempting to login. This
  is the onSubmit for the login button.
*/
router.post('/authenticate', function(req, res) {
  const {email, password} = req.body;
  User.findOne({email}, function(err, result) {
    if(err) {
      console.error();
      res.status(500).json({error: 'Error Finding User - Code 500'});
    } else if(!result) {
      res.status(401).json({error: 'Email could not be found - Code 401'});
    } else {
      user.isCorrectPassword(password, function(err, match) {
        if(err) {
          res.status(500).json({error: 'Error Authenticating User - Code 500'});
        } else if(!match) {
          res.status(401).json({error: 'Email or password is incorrect - Code 401'});
        } else {
          const payload = {email};
          const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '30m'});
          res.cookie('token', token, {httpOnly: true}).sendStatus(200);
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
});

module.exports = router;
