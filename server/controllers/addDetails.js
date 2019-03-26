var mongoose = require('mongoose');
var AddDetails = mongoose.model('AddDetails');
module.exports.addDetails = function (req, res) {
    var addDetails=new AddDetails()
    addDetails.fullname=req.body.fullname;
    addDetails.dob=req.body.birthday;
    addDetails.school=req.body.selectedSchool.name;
    addDetails.class=req.body.selectedClass.name;
    addDetails.division=req.body.selectedDivision.name;
    addDetails.status=req.body.selectedStatus;
    addDetails.save()
    res.json(true)
};

module.exports.viewDetails = function (req, res) {
    AddDetails.find().exec(function(err,data){
        res.json(data)
    })
}