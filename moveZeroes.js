var moveZeroes = function (nums) {
    const length = nums.length;
    nums = nums.filter(x => x !== 0);
    for (let i = 0; i <= length - nums.length; i++) {
        nums.push(0);
    }
    return nums;
};

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && nums[i+1] === 0) {
            nums.splice(i, 2);
            nums.push(0);
            nums.push(0);
        } else if ((nums[i] === 0)) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));