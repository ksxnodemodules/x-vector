
module.exports = (operate, identity) =>
	(...operands) => operands.reduce(operate, identity);
