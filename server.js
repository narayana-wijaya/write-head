var express = require('express');
var app = express();
var os = require('os');

app.set('port', (process.env.PORT || 5000));

app.get('/api/whoami', function(req, res){
	var address = os.networkInterfaces();
	var result = {
		"ipaddress" : address['eth0'][0].address,
		"language"  : req.headers["accept-language"].slice(0, 5),
		"software"  : os.type().concat('; '+os.arch())
	};
	res.send(result);
})

app.listen(app.get('port'), function(){
	console.log('Application start at localhost:5000');
})