const charLength = require('../script/01');

test('test name character', () => {
    expect(charLength('Refactory')).toBe(9);
});