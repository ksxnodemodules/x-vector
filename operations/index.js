
((module) => {
	'use strict';

	module.exports = Object.freeze({
		cumulate: require('./cumulate.js'),
		createOperationSystem: require('./create-operation-system.js'),
		NUMBER_OPERATIONS: require('./number-operations.js')
	});

})(module);
