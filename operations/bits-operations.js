
module.exports = require('./create-operation-system.js')(
	(a, b) => a | b,
	(a, b) => a & b,
	(bits) => bits === -1,
	(bits) => !bits
);
