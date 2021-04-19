var express = require("express");
const mongoose = require("mongoose");

var router = express.Router();
const OrderModel = require("../models/Order");
require('dotenv').config();
const url = process.env.MONGODB_URI_FOOD;

const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Order = connection.model('Order', OrderModel.schema);

router.get('/', function(req, res, next) {
    Order.find({}, (err, orders) => {
        if (err) return console.error(err);
        res.json({data: orders});
        //console.log(orders);
      });
    //res.send({orders});
  });



module.exports = router;