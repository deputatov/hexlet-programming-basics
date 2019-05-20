const formattedTime = (m) => {
    const hours = m / 60 | 0;
    const minutes = m % 60;
    const hoursPart = hours < 10 ? '0' + hours : hours;
    const minutesPart = minutes < 10 ? '0' + minutes : minutes;
    return `${hoursPart}:${minutesPart}`;
}