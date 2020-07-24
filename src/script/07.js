const repeatLetter = (text, number = 1) => {
    return text.split('').map((letter) => {
        if (letter !== ' ') {
            return letter.repeat(number);
        }
        return letter;
    }).join('');
}

module.exports = repeatLetter;