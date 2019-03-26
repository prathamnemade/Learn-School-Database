var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    fullname: {
        type: String,
    },
    dob: {
        type: String,
    },
    school: {
        type: String,
    },
    class: {
        type: String,
    },
    division: {
        type: String,
    },
    status: {
        type: String,
    }
});
mongoose.model('AddDetails', userSchema);