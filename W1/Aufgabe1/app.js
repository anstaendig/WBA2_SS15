// required modules
var fs = require('fs');

// read wolkenkratzer.json
fs.readFile(__dirname+'../wolkenkratzer.json', function(err, data) {
	// error handling
	if (err) throw err;
	// binary -> string with .toString(), string -> object with JSON.parse()
	var obj = JSON.parse(data.toString());
	// print array to console
	obj.wolkenkratzer.forEach(function(wk) {
		console.log('Name: '+wk.name);
		console.log('Stadt: '+wk.stadt);
		console.log('Höhe: '+wk.hoehe);
		console.log('--------------------');
	});
});
