
module.exports = require('./create-operation-system.js')(
	(a, b) => a + b,
	(a, b) => a * b,
	0, 1
);
