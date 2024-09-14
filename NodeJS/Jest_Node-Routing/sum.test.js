const sum = require('./sum');
const {mult, multi} = require('./mult');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
	expect(mult(3, 2)).toBe(6);
	expect(multi(3, 2, 2)).toBe(12);
});