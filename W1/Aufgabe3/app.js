// required modules
var fs = require('fs');
var chalk = require('chalk');

// read wolkenkratzer.json
fs.readFile(__dirname+'/../wolkenkratzer.json', function(err, data) {
	// error handling
	if (err) throw err;
	// binary -> string with .toString(), string -> object with JSON.parse()
	var obj = JSON.parse(data.toString());
	// sort array ascending
	obj.wolkenkratzer.sort(function(a,b) {
		return a.hoehe - b.hoehe;
	});
	// save sorted array to file, object -> string with JSON.stringify()
	fs.writeFile('wolkenkratzer_sortiert.json', JSON.stringify(obj, null, 2), function(err) {
		// error handling
		if (err) throw err;
		// print array to console colorcoded
		obj.wolkenkratzer.forEach(function(wk) {
			console.log(chalk.underline('Name')+': '+chalk.yellow(wk.name));
			console.log(chalk.underline('Stadt')+': '+chalk.red(wk.stadt));
			console.log(chalk.underline('Höhe')+': '+chalk.blue(wk.hoehe));
			console.log('--------------------');
		});
	});
});
