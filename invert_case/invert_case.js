const invertCase = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}

const invertCase2 = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        res += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();        
    }
    return res;
}