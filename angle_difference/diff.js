const diff = (a, b) => Math.min(Math.abs(a - b), 360 - Math.abs(a - b));

console.log(diff(0, 0)); //.toBe(0);
console.log(diff(0, 90)); //.toBe(90);
console.log(diff(0, 180));//.toBe(180);
console.log(diff(0, 190));//.toBe(170);
console.log(diff(225, 0));//.toBe(135);
console.log(diff(0, 225));//.toBe(135);
console.log(diff(300, 45));//.toBe(105);
console.log(diff(45, 300));//.toBe(105);
console.log(diff(240, 300));//.toBe(60);
console.log(diff(120, 30));//.toBe(90);