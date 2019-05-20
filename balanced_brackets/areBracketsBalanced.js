const areBracketBalanced = (str) => {
    let counter = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === '(') {
            counter += 1;
        } else if (str[i] === ')' && counter === 0) {
            return false;
        } else {
            counter -= 1;    
        }
    }
    return counter === 0 ? true : false;
}

console.log(areBracketBalanced('())('));