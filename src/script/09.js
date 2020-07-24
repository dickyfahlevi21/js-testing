const symmetrical = value => {
    const splitArray = String(value).split('');
    if (splitArray.length % 2 === 0) {
        return splitArray.slice(0, splitArray.length / 2).join('') === splitArray.slice(splitArray.length / 2, splitArray.length).reverse().join('');
    }
    return splitArray.slice(0, splitArray.length / 2).join('') === splitArray.slice(splitArray.length / 2 + 1, splitArray.length).reverse().join('');
}

module.exports = symmetrical;