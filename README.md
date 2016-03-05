
# x-vector

## Comming soon...

Working in process.

## Requirements

Node v5.0.0 or later
 - Flag `--es-staging` is required

## Examples

```javascript
var xvec = require('x-vector');
const DIMENSIONS = 3;
class Float64Vector extends Float64Array {
	constructor(...args) {super(DIMENSIONS); Object.assign(args);}
	get(position) {return this[position]}
	set(position, value) {this[position] = value}
};
var vspace = new xvec.VectorSpace(Float64Vector, DIMENSIONS, xvec.NUMBER_OPERATIONS);
var a = new vspace.Vector(12, 34, 56);
var b = new vspace.Vector(13, 24, 35);
var c = new vspace.Vector(14, 15, 16);
console.log({
	'a + b + c': vspace.add(a, b, c),
	'a * b': vspace.vectorProduct(a, b),
	'12 * a': vspace.scalarProduct(a, 12)
});
```
