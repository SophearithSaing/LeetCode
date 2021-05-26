var plusOne = function (digits) {
    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1]++;
    } else {
        let i = digits.length - 1;
        while (digits[i] >= 9) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
            } else {
                digits[i - 1]++;
            }
            if (digits[i -1] < 10) {
                break;
            } else {
                i--;
            }
        }
    }
    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 3, 9]));
console.log(plusOne([1, 2, 9, 9]));
console.log(plusOne([8, 9, 9, 9]));
// console.log(plusOne([0]));
// console.log(plusOne([9]));