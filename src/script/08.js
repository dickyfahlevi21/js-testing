const arrayMirroring = (numberList = []) => {
    return numberList.concat(numberList.slice(0).reverse());
}
module.exports = arrayMirroring;