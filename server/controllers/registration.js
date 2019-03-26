var mongoose = require('mongoose');
var Registration = mongoose.model('Register');
module.exports.checkRegister = function (req, res) {
    Registration.findOne({ 'email': req.body.emailID }).countDocuments().exec(function (err, data) {
      res.json(data);
    })
  }
module.exports.register = function (req, res) {
    console.log("register");
    
    var registration = new Registration()
    registration.email=req.body.emailID;
    registration.fullname=req.body.fullname;
    registration.password=req.body.password;
    registration.save()
    res.json("Data Saved");
};