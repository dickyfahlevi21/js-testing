const roman = require('../script/15');

test('1', () => {
    expect(roman('I')).toBe(1);
});

test('10', () => {
    expect(roman('X')).toBe(10);
});

test('2018', () => {
    expect(roman('MMXVIII')).toBe(2018);
});