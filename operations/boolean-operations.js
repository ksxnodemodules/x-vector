
module.exports = Object.freeze({
	'plus': (a, b) => a || b,
	'times': (a, b) => a && b,
	'zero': false,
	'one': true,
	'finite': (boolean) => !boolean,
	'nonzero': Boolean
});
