var getValue = function(roman) {
    if (roman === 'I') {
        return 1;
    } else if (roman === 'V') {
        return 5;
    } else if (roman === 'X') {
        return 10;
    } else if (roman === 'L') {
        return 50;
    } else if (roman === 'C') {
        return 100;
    } else if (roman === 'D') {
        return 500;
    } else if (roman === 'M') {
        return 1000;
    }
}

var romanToInt = function (s) {
    let number = 0;

    for (let i = 0; i < s.length; i++) {
        if (getValue(s[i]) >= getValue(s[i + 1]) || i === s.length - 1) {
            number += getValue(s[i]);
        } else if (getValue(s[i]) < getValue(s[i + 1])) {
            number += (getValue(s[i + 1]) - getValue(s[i]));
            i++;
        }
    }
    return number;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));