const isPowerOfThree = (number) => {
    let i = 0;
    while (number !== 3 ** i && number >= 3 ** i) {
        i += 1;
    }
    return 3 ** i === number;
}
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(243));

console.log(isPowerOfThree(0));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(12));
console.log(isPowerOfThree(16));
console.log(isPowerOfThree(28));
console.log(isPowerOfThree(90));
