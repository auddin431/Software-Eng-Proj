var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  res.send("API is working properly");
  console.log("Hell Bitch");
});

module.exports = router;
