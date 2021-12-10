const mongoose = require('mongoose');

const UserDetail = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true,"This Email ID already present......."]       
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('UserInformation',UserDetail);