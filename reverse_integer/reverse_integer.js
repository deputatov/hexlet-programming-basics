//Unicode Character 'RIGHT-TO-LEFT OVERRIDE' (U+202E)
const reverseInt = (n) => '\u202E' + n;

const reverseInt2 = (n) => {
    let s = String(Math.abs(n));
    let i = s.length - 1;
    let r = '';
    while (i >= 0) {
      r += s[i];
      i--;
    }
    return n < 0 ? Number(-r): Number(r);
}