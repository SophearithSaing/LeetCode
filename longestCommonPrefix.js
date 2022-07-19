var longestCommonPrefix = function (strs) {
    let result = '';
    if (strs.length === 1) {
        return strs[0];
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i] && j === strs.length - 1) {
                result = result + strs[0][i];
            } else if (strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));