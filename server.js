var express = require('express');
var app = express();
var url = require('url');
const dns = require('dns');

app.set('port', (process.env.PORT || 5000));

var result = {};

app.get('/api/whoami', function(req, res){
	//result.ipaddress = req.ip;
	var address = os.networkInterfaces();
	result.ipaddress = address;
	result.software = os.type();
	res.send(result);
})

app.listen(app.get('port'), function(){
	console.log('Application start at localhost:5000');
})