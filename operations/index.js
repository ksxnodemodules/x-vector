
((module) => {
	'use strict';

	module.exports = Object.freeze({
		BITS_OPERATIONS: require('./bit-operations.js'),
		BOOLEAN_OPERATIONS: require('./boolean-operations.js'),
		NUMBER_OPERATIONS: require('./number-operations.js')
	});

})(module);
