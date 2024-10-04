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
//fire function after doc saved to db
userSchema.post('save', function (doc, next) {
    console.log('New user created and saved', doc);
    next();
});

//fire funct before doc saves to DB
userSchema.pre('save', function (next) {
    console.log('User about to be created and saved', this);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
