
((module) => {
	'use strict';
	var freeze = Object.freeze;

	var createOperationSystem = (serial, plus, times, zero, one) => freeze({
		sum: serial(plus, zero),
		product: serial(times, one),
		__proto__: freeze({
			serial: serial,
			plus: plus, times: times,
			zero: zero, one: one,
			__proto__: null
		})
	});

	module.exports = createOperationSystem;

})(module);
