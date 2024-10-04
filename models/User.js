const mongoose = require('mongoose');
const{ isEmail}= require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'Please enter and email'],
        unique: true,
        lowercase: true,
        validate: [isEmail,'PLease enter a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
