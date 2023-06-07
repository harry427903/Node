const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true,'Please tell us your name!'\]
    },
    email:{
        type: String,
        required: [true, 'Please provide your eamil'],
        unique: true,
        lowercase: true,
        
    },
    photo: String,
    role: {
        type: String,
        enum: ['user','guide','lead-guide','admin'],
        default: 'user'
    },
    password:{
        type: String,
        required: [true,'Please provide a password'],
        minlength: 8,
        select: false
    },
    
})