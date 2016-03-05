
module.exports = require('./create-operation-system.js')(
	(a, b) => a + b,
	(a, b) => a * b,
	0, 1,
	(number) => !isFinite(number),
	(number) => !(number && isFinite(number))
);
