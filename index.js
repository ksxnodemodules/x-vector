
((module) => {
	'use strict';

	module.exports = {
		VectorSpace: require('./vector-space.js'),
		__proto__: require('./operations')
	};

})(module);
