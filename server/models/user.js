require("../config/mongoose");
const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please don't forget to add your first name"],
        minlength: [2, "First Name must have at least 2 characters."],
    },
    lastName: {
        type: String,
        required: [true, "Please don't forget to add your last name"],
        minlength: [2, "Last Name must have at least 2 characters."]
    },
    email: {
        type: String,
        required: [true, "Please don't forget to add your email"],
        unique: [true, 'This email already exist']
    },
    password: {
        type: String,
        required: [true, "Please don't forget to add your password"],
        minlength: [8, "The minimum lengfth for a password is 8"]
    },
   
}, { timestamps: true, strict: false });

// UserSchema.plugin(uniqueValidator, { message: 'All emails must be unique! Please Login if you already have an account.' });
User = mongoose.model('User', UserSchema);