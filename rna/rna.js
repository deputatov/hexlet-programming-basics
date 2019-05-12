const dnaToRna = (str) => {
    if (str === '') {
        return '';
    }
    const DNAtoRNA = new Map([
        ['A', 'U'],
        ['C', 'G'],
        ['G', 'C'],
        ['T', 'A']
    ]);
    let result = '';
    for (let i = 0; i < str.length; i++){
        let nucRna = DNAtoRNA.get(str[i]);
        if (nucRna === undefined) {
            return null;
        }
        result += nucRna;
    }
    return result;
}

const dnaToRna2 = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++){
        switch (str[i]) {
            case 'A':
                res += 'U'; 
                break;
            case 'C':
                res += 'G';
                break;
            case 'G':
                res += 'C';
                break;
            case 'T':
                res += 'A'
                break;    
            default:
                return null;
        }
    }
    return res;
}

console.log(dnaToRna2('ACNTG'));