
const sumSquareDifference = (n) => {
    let sumSq = 0;
    let sqSum = 0
    for (let i = 1; i <= n; i++){
        sumSq += i ** 2;
        sqSum += i;
    }
            return sqSum ** 2 - sumSq;
}