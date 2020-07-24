const isLeapYear = require('../script/04');

test('return true', () => {
    expect(isLeapYear(2000)).toBe(true);
});

test('return false', () => {
    expect(isLeapYear(2009)).toBe(false);
});