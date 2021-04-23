const mongoose = require('mongoose');

const manageSchema = new mongoose.Schema(
    {
      food: String,
      price: Number,
      count: Number
    },
    {
        collection: "managefood"
    });

module.exports = mongoose.model('ManFood', manageSchema);
