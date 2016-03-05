
((module) => {
	'use strict';

	module.exports = Object.freeze({
		cumulate: require('./cumulate.js'),
		createOperationSystem: require('./create-operation-system.js'),
		BOOLEAN_OPERATIONS: require('./boolean-operations.js'),
		NUMBER_OPERATIONS: require('./number-operations.js')
	});

})(module);
