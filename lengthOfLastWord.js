var lengthOfLastWord = function (s) {
    const arr = s.split(' ');
    let wordIndex = arr.length - 1;
    console.log(arr);
    if (wordIndex === 0 || arr[wordIndex].length > 0) {
        return arr[wordIndex].length;
    } else {
        for (let index = wordIndex; index >= 0; index--) {
            if (arr[index] !== undefined) {
                if (arr[index].length > 0) {
                    return arr[index].length;
                }
            }
        }
    }
    return arr[wordIndex].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord(''));
console.log(lengthOfLastWord('a '));
console.log(lengthOfLastWord(' a'));
console.log(lengthOfLastWord("b   a    "));