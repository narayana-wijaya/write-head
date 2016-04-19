var express = require('express');
var app = express();
var url = require('url');
const dns = require('dns');

app.set('port', (process.env.PORT || 5000));

var result = {};

app.get('/api/whoami', function(req, res){
	//var address = os.networkInterfaces();
	//result.ipaddress = address['Wi-Fi'][1].address;
	//result.software = os.type();
	res.send(result);
})

dns.lookup('heroku.com', function(err, addresses, family){
	console.log(addresses);
	result.ipaddress = addresses;
});

app.listen(app.get('port'), function(){
	console.log('Application start at localhost:5000');
})