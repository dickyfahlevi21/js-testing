const isPrime = number => {
    for (let i = number - 1; i > 1; i -= 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
module.exports = isPrime;