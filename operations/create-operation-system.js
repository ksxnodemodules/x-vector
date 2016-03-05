
((module) => {
	'use strict';

	var cumulate = require('./cumulate.js');
	var freeze = Object.freeze;

	var createOperationSystem = (plus, times, zero, one) => freeze({
		sum: cumulate(plus, zero),
		product: cumulate(times, one),
		__proto__: freeze({
			plus: plus, times: times,
			zero: zero, one: one,
			__proto__: null
		})
	});

	module.exports = createOperationSystem;

})(module);
