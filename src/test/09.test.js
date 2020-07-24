const symmetrical = require('../script/09');

test('return true', () => {
    expect(symmetrical('malam')).toBeTruthy();
});

test('return false', () => {
    expect(symmetrical(1234)).toBeFalsy();
});