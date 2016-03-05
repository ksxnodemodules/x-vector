
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var cumulate = require('./cumulate.js');

	var createOperationSystem = (plus, times, zero, one, inf, iinf) => freeze({
		sum: cumulate(plus, zero, inf),
		product: cumulate(plus, zero, iinf),
		__proto__: freeze({
			'ADDITION': plus, 'MULTIPLICATION': times,
			'ADDITION_IDENTITY': zero, 'MULTIPLICATION_IDENTITY': one,
			'INFINITY': inf, 'INVERSE_INFINITY': iinf,
			__proto__: null
		})
	});

	module.exports = createOperationSystem;

})(module);
