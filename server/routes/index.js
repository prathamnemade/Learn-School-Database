var express = require('express');
var router = express.Router();
var verifyEmail=require('../controllers/login');
var registration=require('../controllers/registration');

router.post('/login', verifyEmail.login);
router.post('/register', registration.register);

module.exports = router;