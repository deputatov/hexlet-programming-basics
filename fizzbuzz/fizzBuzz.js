const fizzBuzz = (b, e) => {
    if (e >= b) {
        for (let i = b; i <= e; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
                console.log('Fizz');
            } else if (i % 3 !== 0 && i % 5 === 0) {
                console.log('Buzz');
            } else if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz')
            } else {
                console.log(i)
            }
        }
    }
}

// "Решение учителя"
const fizzBuzz2 = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
      const hasFizz = i % 3 === 0;
      const hasBuzz = i % 5 === 0;
      const fizzPart = hasFizz ? 'Fizz' : '';
      const buzzPart = hasBuzz ? 'Buzz' : '';
      console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);
    }
  };
  
  fizzBuzz2(11, 20);
