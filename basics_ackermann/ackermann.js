const ackermann = (m, n) => {
    if (m === 0) {
        return n + 1;
    }
    if (n === 0 && m > 0) {
        return ackermann(m - 1, 1);
    }
    return ackermann(m - 1, ackermann(m, n - 1));
};

console.log(ackermann(2, 1)); // 5
console.log(ackermann(2, 3)); // 9