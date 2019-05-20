const reverse = (s) => {
    if (s.length === 0) {
        return s;
    }
    return s[s.length - 1] + reverse(s.substr(0, s.length - 1));
}