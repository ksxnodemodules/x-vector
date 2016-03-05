
module.exports = require('./create-operation-system.js')(
	require('./cumulate.js'),
	(a, b) => a + b,
	(a, b) => a * b,
	0, 1
);
