const censor = require('../script/10');

test('#', () => {
    expect(censor('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toMatch('#### ingin makan #### goreng.');
});

test('*', () => {
    expect(censor('Pada hari Minggu saya tidur siang.', ['minggu', 'tidur'], '*')).toMatch('Pada hari ****** saya ***** siang.');
});