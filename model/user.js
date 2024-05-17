const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Username: {
        type: String
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("User", userSchema);

module.exports = user;