// required modules
var fs = require('fs');
var chalk = require('chalk');

// read wolkenkratzer.json
fs.readFile(__dirname+'/wolkenkratzer.json', function(err, data) {
	// error handling
	if (err) throw err;
	// binary -> string with .toString(), string -> object with JSON.parse()
	var obj = JSON.parse(data.toString());
	// sort array descending
	// TODO b-a
	obj.wolkenkratzer.sort(function(a,b) {
		if(a.hoehe > b.hoehe) return -1;
		if(a.hoehe < b.hoehe) return 1;
		return 0;
	});
	// save sorted array to file, object -> string with JSON.stringify()
	fs.writeFile('wolkenkratzer_sortiert.json', JSON.stringify(obj), function(err) {
		// error handling
		if (err) throw err;
		// print array to console colorcoded
		obj.wolkenkratzer.forEach(function(wk) {
			console.log(chalk.red.underline('Name')+': '+chalk.yellow(wk.name));
			console.log(chalk.green.underline('Stadt')+': '+chalk.yellow(wk.stadt));
			console.log(chalk.blue.underline('Höhe')+': '+chalk.yellow(wk.hoehe));
			console.log('--------------------');
		});
	});
});
