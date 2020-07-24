const mebiToKibi = require('../script/03');

test('2 MiB is 2048 KiB', () => {
    expect(mebiToKibi(2)).toBe(2048);
});