var moveZeroes = function (nums) {
    const length = nums.length;
    nums = nums.filter(x => x !== 0);
    for (let i = 0; i <= length - nums.length; i++) {
        nums.push(0);
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0,0,1]));