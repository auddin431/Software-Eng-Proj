// User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

/*
    Basic user schama with just email and password. We can add
    in name and other relevant information going forward.
*/
const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

/*
    Sets up pre-hook to ensure that if the data in the password field is
    new or modified, the data gets rehashed. Otherwise, the already-hashed
    password is left alone.
*/
UserSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')) {
        const user = this;
        bcrypt.hash(user.password, saltRounds, function(err, hashedPassword) {
            if(err) {
                console.log(`Error hashing password for user ${user.name}`);
                next(err);
            } else {
                user.password = hashedPassword;
                next();
            }
        })
    } else {
        next();
    }
});

/*
    Creates a method to easily check an entered password against the
    password entry within a db schema.
*/
UserSchema.methods.authPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if(err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);
