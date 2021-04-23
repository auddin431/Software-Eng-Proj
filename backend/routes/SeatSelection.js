var express = require("express");
const mongoose = require("mongoose");


var router = express.Router();
const SeatModel = require("../models/Seats");
require('dotenv').config();
const url = process.env.MONGODB_URI_SEATS;

const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Seats = connection.model('Seats', SeatModel.schema);

router.post("/addSeats", function (req, res, next) {
    console.log(req.body.moviePrice);
    console.log(req.body.totalSeats);
    console.log(req.body.seatNumbers);
    
    const seats = new Seats({ moviePrice: req.body.moviePrice, totalSeats: req.body.totalSeats, seatNumbers: req.body.seatNumbers });
    seats.save(function (err) {
      if (err) return console.error(err);
      console.log("Seats were saved");
    });
    Seats.find({}, (err, seat) => {
      if (err) return console.error(err);
      
    });
});

router.get('/', function(req, res, next) {
    Seats.find({}, (err, seats) => {
        if (err) return console.error(err);
        res.json({data: seats});
      });
  });

module.exports = router;