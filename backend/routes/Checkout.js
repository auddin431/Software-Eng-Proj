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

  router.post("/addItem", function (req, res, next) {
    console.log(req.body.name);
    console.log(req.body.price);
    const order = new Order({ name: req.body.name, price: req.body.price });
    order.save(function (err) {
      if (err) return console.error(err);
      console.log("Order was saved");
    });
    Order.find({}, (err, orders) => {
      if (err) return console.error(err);
      //console.log(orders);
    });
  });

router.post('/deleteItem', function(req, res, next) {
  console.log(req.body.order.name);
  Order.deleteOne({name: req.body.order.name},function(err){
    if(err) {
      res.status(500).send("Error deleting item, please try again.");
      console.log(err);
    } else {
      res.status(200).send("Item deleted successfully!");
    }
  })
});


module.exports = router;