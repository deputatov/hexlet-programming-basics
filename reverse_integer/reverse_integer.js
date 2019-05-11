//Unicode Character 'RIGHT-TO-LEFT OVERRIDE' (U+202E)
const reverseInt = (n) => '\u202E' + n;


const reverseInt2 = (n) => {
    let s = String(n);
    let i = s.length - 1;
    let r = '';
    while (i >= 0) {
      r += s[i];
      i--;
    }
    return Number(r);
}

const reverseInt3 = (n) => {
    let s = String(Math.abs(n));
    let i = s.length - 1;
    let r = '';
    while (i >= 0) {
      r += s[i];
      i--;
    }
    return n < 0 ? Number(-r): Number(r);
}
//console.log(reverseInt2(-8900));
console.log(reverseInt3(-122));
console.log(reverseInt(122));