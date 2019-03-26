var mongoose = require('mongoose');
var Registration = mongoose.model('Register');
module.exports.login = function (req, res) {
    Registration.findOne({ 'email': req.body.emailID }).exec(function (err, data) {
        if (err) {
            res.json("DB Error")
        }
        if (data.email == req.body.emailID && data.password == req.body.password) {
            res.json(true)
        } else {
            res.json(false)
        }
    })
};