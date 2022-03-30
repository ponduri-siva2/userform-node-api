const db = require("mongoose");

const userSchema = new db.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

module.exports = db.model('user', userSchema);