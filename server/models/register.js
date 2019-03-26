var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    fullname: {
        type: String,
    },
    password: {
        type: String,
    },
});
mongoose.model('Register', userSchema);