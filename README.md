
# x-vector

## Comming soon...

Working in process.

## Requirements

Node v5.0.0 or later
 - Flag `--es-staging` is required

## Examples

```javascript
var xvec = require('x-vector');
class Float64Vector extends Float64Array {
	constructor(...args) {super(args)}
	get(position) {return this[position]}
	set(position, value) {this[position] = value}
};
var vspace = new xvec.VectorSpace(Float64Vector, xvec.NUMBER_ARRAY_OPERATIONS);
var a = new vspace.Vector(12, 34, 56);
var b = new vspace.Vector(13, 24, 35);
console.log({
	'a + b': vspace.add(a, b),
	'a * b': vspace.vectorProduct(a, b),
	'12 * a': vspace.scalarProduct(a, 12)
});
```
