
module.exports = require('./create-operation-system.js')(
	(a, b) => a || b,
	(a, b) => a && b,
	false, true,
	(boolean) => boolean,
	(boolean) => !boolean
);
