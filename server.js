var express = require('express');
var app = express();
var url = require('url');
const dns = require('dns');

app.set('port', (process.env.PORT || 5000));

var result = {};

app.get('/api/whoami', function(req, res){
	var get_url = url.parse(req.url, true).path;
	
	res.send(result);
})
//chech ip address tp belum minta url
dns.lookup('heroku.com', function(err, addresses, family){
	console.log(addresses);
	result.ipaddress = addresses;
});

/*{
	"ipaddress":"114.124.38.135",
	"language":"en-US",
	"software":"Windows NT 10.0; WOW64"} osType()
*/
app.listen(app.get('port'), function(){
	console.log('Application start at localhost:5000');
})