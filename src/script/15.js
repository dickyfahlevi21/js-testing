const roman = text => {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    return text.split('').map(rom => romanMap[rom]).reduce((acc, val) => acc + val);
}
module.exports = roman;