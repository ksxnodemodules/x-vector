
((module) => {
	'use strict';

	var cumulate = (operate, identity) =>
		(...operands) => operands.reduce(operate, identity);

	var search = (check, identity, fres, ires) => (...operands) => {
		for (let element of operands) {
			let res = ires(element);
			if (check(res)) {
				return fres(pres);
			}
		}
	};

	const DEFAULT = (x) => x;

	cumulate.search = (check, identity, fres, ires) =>
		search(check, identity, fres || DEFAULT, ires || DEFAULT);

	module.exports = cumulate;

})(module);
