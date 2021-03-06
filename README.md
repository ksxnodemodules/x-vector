
# x-vector

## Requirements

 * Node >= 6.0.0

## Examples

```javascript
var xvec = require('x-vector');
const DIMENSIONS = 3;
class Float64Vector extends Float64Array {
	constructor(...args) {super(DIMENSIONS); Object.assign(this, args);}
	get(position) {return this[position]}
	set(position, value) {this[position] = value}
	assign(vector) {Object.assign(this, vector)}
};
var Vector = new xvec.VectorSpace(Float64Vector, DIMENSIONS, xvec.NUMBER_OPERATIONS).Vector;
var a = new Vector(12, 34, 56);
var b = new Vector(13, 24, 35);
var c = new Vector(14, 15, 16);
console.log({
	'a + b + c': Vector.sum(a, b, c),
	'a · b': Vector.dot(a, b),
	'12 * a': Vector.multiply(a, 12)
});
```
