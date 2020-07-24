const isIsogram = text => {
    const testText = new Set(text.split(''));
    if ([...testText].join('') === text) {
        return true;
    }
    return false;
}

module.exports = isIsogram;