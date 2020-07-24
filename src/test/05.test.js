const isPrime = require('../script/05');

test('return false', () => {
    expect(isPrime(4)).toBe(false);
});

test('return true', () => {
    expect(isPrime(2)).toBe(true);
});