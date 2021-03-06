var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/food_order";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const foodSchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: "orders" }
);
const Order = mongoose.model("Order", foodSchema, "orders");

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.get("/bruh", function (req, res, next) {
  res.send("Bruh moment");
});

router.post("/bruh69", function (req, res, next) {
  console.log(req.body.bruh);
  const order2 = new Order({ name: "Second order" });
  order2.save(function (err) {
    if (err) return console.error(err);
  });
});

module.exports = router;
