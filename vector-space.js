
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var define = Object.defineProperty;
	var cumulate = require('./utils/cumulate.js');

	module.exports = class extends VectorSpace {};

	function VectorSpace(VectorSuper, dimensions, operations) {

		var plus = operations.plus;
		var times = operations.times;
		var zero = operations.zero;
		var one = operations.one;
		var finite = operations.finite;
		var nonzero = operations.nonzero;

		class Vector extends VectorSuper {

			add(vector) {
				for (let i = 0; i != dimensions; ++i) {
					this.set(i, plus(this.get(i), vector.get(i)));
				}
				return this;
			}

			substract(vector) {
				return this.add(vector.clone().negative());
			}

			multiply(scalar) {
				for (let i = 0; i !== dimensions; ++i) {
					this.set(i, times(this.get(i), vector.get(i)));
				}
				return this;
			}

			divide(scalar) {
				return this.multiply(scalar.clone().inverse());
			}

			dot(vector) {
				return Vector.dot2v(this, vector);
			}

			slash(vector) {
				return Vector.slash2v(this, vector);
			}

			static sum2v(lvec, rvec) {
				return new this().fill(zero).add(lvec).add(rvec);
			}

			static sum(...vlist) {
				var result = new this().fill(zero);
				vlist.forEach((vector) => result.add(vector));
				return result;
			}

			static multiply(vector, scalar) {
				return new this().assign(vector).multiply(scalar);
			}

			static dot2v(lvec, rvec) {
				var result = zero;
				for (let i = 0; finite(result) && i !== dimensions; ++i) {
					result = plus(result, times(lvec.get(i), rvec.get(i)));
				}
				return result;
			}

			static slash2v(lvec, rvec) {
				return this.dot2v(lvec, rvec.clone().inverse());
			}

			static dot(...vlist) {
				var sum = zero;
				for (let i = 0; finite(sum) && i !== dimensions; ++i) {
					let product = one;
					let length = vlist.length;
					for (let j = 0; nonzero(product) && j !== length; ++j) {
						product = times(product, vlist[j].get(i));
					}
					sum = plus(sum, product);
				}
				return sum;
			}

			static clone(vector) {
				return vector.clone();
			}

			static inverse(vector) {
				return vector.clone().inverse();
			}

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
