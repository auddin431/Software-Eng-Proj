var express = require("express");
const mongoose = require("mongoose");
//const url = process.env.MONGODB_URI_FOOD;
const url = "mongodb+srv://abdul:abdultest@clusterica.qyubt.mongodb.net/abdul";
var router = express.Router();
const OrderModel = require("../models/Order");

const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Order = connection.model("Order", OrderModel.schema);

router.post("/", function (req, res, next) {
  console.log(req.body.name);
  console.log(req.body.price);
  const order = new Order({ name: req.body.name, price: req.body.price });
  order.save(function (err) {
    if (err) return console.error(err);
    console.log("Order was saved");
  });
  Order.find({}, (err, orders) => {
    if (err) return console.error(err);
    console.log(orders);
  });
});

module.exports = router;
