const repeatLetter = require('../script/07');

test('Space are not repeated', () => {
    expect(repeatLetter('Hello World! ', 2)).toMatch('HHeelllloo WWoorrlldd!!');
});