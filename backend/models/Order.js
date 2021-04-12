const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
      name: String,
      price: String,
    },
    {
        collection: "orders"
    });

module.exports = mongoose.model('Order', foodSchema);
