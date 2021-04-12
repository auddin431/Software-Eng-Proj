// User.js
const mongoose = require('mongoose');

/*
    Basic user schama with just email and password. We can add
    in name and other relevant information going forward.
*/
const MovieSchema = new mongoose.Schema({
    movieid: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
