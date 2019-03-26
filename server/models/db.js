var mongoose = require('mongoose');
var dbURI = 'mongodb://learnschool:learnschool123@ds123196.mlab.com:23196/learnschool';
mongoose.connect(dbURI,{ useNewUrlParser: true,useCreateIndex: true, });

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

require('./add')
require('./register');