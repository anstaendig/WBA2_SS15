// required modules
var fs = require('fs');
var chalk = require('chalk');

// read wolkenkratzer.json
fs.readFile(__dirname+'../wolkenkratzer.json', function(err, data) {
	// error handling
	if (err) throw err;
	// binary -> string with .toString(), string -> object with JSON.parse()
	var obj = JSON.parse(data.toString());
	// print array to console colorcoded
	obj.wolkenkratzer.forEach(function(wk) {
		console.log(chalk.red.underline('Name')+': '+chalk.yellow(wk.name));
		console.log(chalk.green.underline('Stadt')+': '+chalk.yellow(wk.stadt));
		console.log(chalk.blue.underline('Höhe')+': '+chalk.yellow(wk.hoehe));
		console.log('--------------------');
	});
});
