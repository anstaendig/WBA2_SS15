var fs = require('fs');

fs.readFile(__dirname+'/wolkenkratzer.json', function(err, data) { 
	if (err) throw err;
	var obj = JSON.parse(data.toString());
	obj.wolkenkratzer.forEach(function(wk) {
		console.log('Name: '+wk.name);
		console.log('Stadt: '+wk.stadt);
		console.log('Höhe: '+wk.hoehe);
		console.log('--------------------');
	});
});