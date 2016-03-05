
((module) => {
	'use strict';

	var cumulate = (operate, identity, stop) => (...operands) => {
		var result = identity;
		for (let element of operands) {
			result = operate(result, element);
			if (stop(result)) {
				break;
			}
		}
		return result;
	};

	const DEFAULT = () => false;

	module.exports = (operate, identity, stop) =>
		cumulate(operate, identity, stop || DEFAULT);

})(module);
