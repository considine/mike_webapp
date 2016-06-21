'use strict';

var express = require('express');

var app = express();
app.use('/', express.static('public'));
app.use('/templates', express.static('public'));

require ('./database');
app.listen(3000, function() {
	console.log("the server is running")
});
