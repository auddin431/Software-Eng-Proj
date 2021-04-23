var express = require('express');
var router = express.Router();
var MovieModel = require('../models/Movies.js');
var jwt = require('jsonwebtoken');
const authToken = require('../middleware.js');
var mdb = require('mongoose');
require('dotenv').config();

var connection_uri = process.env.MONGODB_URI_MOVIE;
var login_conn = mdb.createConnection(connection_uri, function(err) {
  if (err) {
    console.log('Error: failed to connect to Mongoose Database')
    throw err;
  } else {
    console.log('Successfully connected to Mongoose Database');
  }
});
var Movie = login_conn.model('Movie', MovieModel.schema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/nowshowing', function(req, res, next) {
  Movie.find({}, `movieid title`,function(err,data){
    if(data != null) {
      res.send(data);
    }
    if(err) {
      console.log(err);
    }
  });
});

router.post('/deletemovie', function(req, res, next) {
  Movie.deleteOne(req.body,function(err){
    if(err) {
      res.status(500).send("Error deleting movie, please try again.");
      console.log(err);
    } else {
      res.status(200).send("Movie deleted successfully!");
    }
  })
});

/*
  Sets up a post route for registration. This will be the route used
  onClick when registering.
*/
router.post('/addmovie', function(req, res) {
  console.log("Recived registration request...");
  const {movieid, title} = req.body;
  const movie = new Movie({movieid, title});
  movie.save(function(err) {
    if(err) {
      res.status(500).send("Error adding movie, please try again.");
      console.log(err);
    } else {
      res.status(200).send("Movie now successfully added!");
    }
  });
});

module.exports = router;
