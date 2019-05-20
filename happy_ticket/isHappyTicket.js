const isHappyTicket = (value) => {
    if (typeof (value) === "number") {
        value = String(value);
    }
    for (let i = 0; i < value.length / 2; i++) {
        sum1 += Number(value[i]);
        sum2 += Number(value[(value.length / 2) + i]);
    }
    return sum1 === sum2;
}

const isHappyTicket2 = (_num) => {
    const num = String(_num);
    let balance = 0;

    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
        balance += +num[i] - +num[j];
    }
    return balance === 0;
}