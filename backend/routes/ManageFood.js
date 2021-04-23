var express = require("express");
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI_MANAGEFOOD;
var router = express.Router();
const ManFoodModel = require("../models/ManFood");

const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

ManFood = connection.model('ManFood', ManFoodModel.schema);

router.post("/", function (req, res, next) {
  const managefood = new ManFood({ food: req.body.food, price: req.body.price, count: req.body.count });
  managefood.save(function (err) {
    if (err) return console.error(err);
    console.log("Food was saved");
  });
  ManFood.find({}, (err, food) => {
    if (err) return console.error(err);
    console.log(food);
  });
});

router.get('/addFood', function(req, res, next) {
    ManFood.find({}, (err, food) => {
        if (err) return console.error(err);
        res.json({data: food});
      });
  });

  router.post('/delFood', function(req, res, next) {
    console.log(req.body.food.food);
    ManFood.deleteOne({food: req.body.food.food},function(err){
      if(err) {
        res.status(500).send("Error deleting food, please try again.");
        console.log(err);
      } else {
        res.status(200).send("Food deleted successfully!");
      }
    })
  });

module.exports = router;