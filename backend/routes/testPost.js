var express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/food_order";
var router = express.Router();

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const foodSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
  },
  { collection: "orders" }
);
const Order = mongoose.model("Order", foodSchema, "orders");

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
