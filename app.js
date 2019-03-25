var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
require('./server/models/db');
var routesApi = require('./server/routes/index');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const port = 5000;
app.set('port', port);
app.use('', routesApi);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;
