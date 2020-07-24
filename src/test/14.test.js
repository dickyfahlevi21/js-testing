const isIsogram = require('../script/14');

test('return true', () => {
    expect(isIsogram('gelas')).toBeTruthy();
});

test('return false', () => {
    expect(isIsogram('makan')).toBeFalsy();
});