
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var cumulate = require('./utils/cumulate.js');

	module.exports = class extends VectorSpace {};

	function VectorSpace(VectorSuper, dimensions, operations) {

		var plus = operations.plus;
		var times = operations.times;
		var zero = operations.zero;
		var one = operations.one;
		var inf = operations.inf;
		var iinf = operations.iinf;

		class Vector extends VectorSuper {

			add(vector) {
				for (let i = 0; i != dimensions; ++i) {
					this.set(i, plus(this.get(i), vector.get(i)));
				}
				return this;
			}

			substract(vector) {
				return this.add(vector.negative());
			}

			multiply(scalar) {
				for (let i = 0; i != dimensions; ++i) {
					this.set(i, times(this.get(i), vector.get(i)));
				}
				return this;
			}

			scalarDivide(scalar) {
				return this.multiply(scalar.inverse());
			}

			dot1v(vector) {
				// continue from here...
			}

			dot(...vlist) {}

			static create(...args) {
				return new this(...args);
			}

		}

		return freeze({
			Vector: class extends Vector {},
			__proto__: this
		});

	}

})(module);
