const repeatString = require('../script/06');

test('return Makan! Makan! Makan', () => {
    expect(repeatString('Makan! ', 3)).toMatch('Makan! Makan! Makan');
});