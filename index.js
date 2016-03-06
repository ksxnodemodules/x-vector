
((module) => {
	'use strict';

	module.exports = {
		VectorSpace: require('./vector-space.js'),
		utils: require('./utils'),
		__proto__: require('./operations')
	};

})(module);
