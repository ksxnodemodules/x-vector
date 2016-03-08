
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var define = Object.defineProperty;
	var create = Object.create;

	class VectorSpace extends VectorSpaceSuper {
		constructor(VectorSuper, iteration, operations) {
			super(VectorSuper, typeof iteration === 'function' ? iteration : createIteratorCreator(iteration), operations);
		}
	}

	module.exports = class extends VectorSpace {};

	var _getretf = (value) =>
		typeof value === 'function' ? value : () => value;

	var _getcmpf = (value) =>
		typeof value === 'function' ? value : (operand) => value !== operand;

	function VectorSpaceSuper(VectorSuper, createIterator, operations) {

		var plus = operations.plus;
		var times = operations.times;
		var zero = _getretf(operations.zero);
		var one = _getretf(operations.one);
		var finite = _getcmpf(operations.finite);
		var nonzero = _getcmpf(operations.nonzero);

		class Vector extends VectorSuper {

			add(vector) {
				for (let pos = createIterator(); pos.keepgoing(); pos.forward()) {
					this.set(pos, plus(this.get(pos), vector.get(pos)));
				}
				return this;
			}

			substract(vector) {
				return this.add(vector.clone().negative());
			}

			multiply(scalar) {
				for (let pos = createIterator(); pos.keepgoing(); pos.forward()) {
					this.set(pos, times(this.get(pos), scalar));
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

			assign(vector) {
				super.assign(vector);
				return this;
			}

			static sum2v(lvec, rvec) {
				return new this().fill(zero()).add(lvec).add(rvec);
			}

			static sum(...vlist) {
				var result = new this().fill(zero());
				vlist.forEach((vector) => result.add(vector));
				return result;
			}

			static multiply(vector, scalar) {
				return new this().assign(vector).multiply(scalar);
			}

			static dot2v(lvec, rvec) {
				var result = zero();
				for (let pos = createIterator(); finite(result) && pos.keepgoing(); pos.forward()) {
					result = plus(result, times(lvec.get(pos), rvec.get(pos)));
				}
				return result;
			}

			static slash2v(lvec, rvec) {
				return this.dot2v(lvec, rvec.clone().inverse());
			}

			static dot(...vlist) {
				var sum = zero();
				for (let pos = createIterator(); finite(sum) && pos.keepgoing(); pos.forward()) {
					let product = one();
					let length = vlist.length;
					for (let index = 0; nonzero(product) && index !== length; ++index) {
						product = times(product, vlist[index].get(pos));
					}
					sum = plus(sum, product);
				}
				return sum;
			}

			static assign(target, source) {
				target.assign(source);
				return this;
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
			__proto__: freeze(this)
		});

	}

	function createIteratorCreator(dimensions) {
		return () => new Iterator();
		function Iterator() {
			var value = 0;
			return create({
				valueOf: () => value,
				toString: () => String(value),
				keepgoing: () => value !== dimensions,
				forward: () => ++value,
				__proto__: this
			});
		}
	}

})(module);
