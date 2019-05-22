
const withoutTwoZeros = (k, n) => {
  const factorial = (m) => {
    return m ? m * factorial(m - 1) : 1;
  }
  return k > n + 1 ? 0 : factorial(n + 1) / (factorial(k) * factorial(n + 1 - k));
}