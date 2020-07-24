const censor = (text, censoredWord, censorSymbol = '#') => {
    return text.replace(new RegExp(`${censoredWord.map(word => `\\b${word}\\b`).join('|')}`, 'gi'), catchedWord => censorSymbol.repeat(catchedWord.length));
}
module.exports = censor;