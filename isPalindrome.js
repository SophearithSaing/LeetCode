var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true;
    }
    const str = x.toString();
    let j = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[j]) {
            return false;
        } else if (i === j || i === j - 1 && str[i] === str[j]) {
            return true;
        } else {
            j--;
        }
    }
};

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(1000021));
console.log(isPalindrome(11));