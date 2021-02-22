var express = require('express');
var router = express.Router();
var User = require('../modles/Users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
  Sets up a post route for registration. This will be the route used
  onSubmit when registering.
*/
router.post('/register', function(req, res) {
  const {email, passsword} = req.body;
  const user = new User({email, passsword});
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

});

/*
  Used to authenticate a users token before rendering/serving a
  protected route.
*/
router.get('/checkToken', placeholderfunction, function(req, res) {
  res.sendStatus(200);
});

module.exports = router;
