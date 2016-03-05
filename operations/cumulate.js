
module.exports = (operate, init) =>
	(...operands) => operands.reduce(operate, init);
