const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    movieTitle: String,
    moviePrice: Number,
    totalSeats: Number,
    seatNumbers: Array,
  },
  {
    collection: "seats",
  }
);

module.exports = mongoose.model("Seats", seatSchema);
