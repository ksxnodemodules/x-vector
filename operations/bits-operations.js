
module.exports = Object.freeze({
	'plus': (a, b) => a | b,
	'times': (a, b) => a & b,
	'zero': () => 0,
	'one': () => -1,
	'finite': (bits) => bits !== -1,
	'nonzero': Boolean
});
