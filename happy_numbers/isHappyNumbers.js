const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }
    return sum;
};

// BEGIN (write your solution here)
const isHappyNumbers = (num) => {
    for (let i = 0; i <= 10; i += 1) {
        if (num = sumOfSquareDigits(num) === 1) {
            return true;
        }          
    }
    return false;
}
// END

//console.log(isHappyNumbers(7));
console.log(isHappyNumbers(7));