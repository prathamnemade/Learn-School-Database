var express = require('express');
var router = express.Router();
var verifyEmail=require('../controllers/login');
var registration=require('../controllers/registration');
var addDetails=require('../controllers/addDetails')
router.post('/login', verifyEmail.login);
router.post('/register', registration.register);
router.post('/checkExistence',registration.checkRegister)
router.post('/addDetails',addDetails.addDetails)
router.post('/viewDetails',addDetails.viewDetails)
module.exports = router;