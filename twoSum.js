// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target && i !== j) {
//                 return [i, j];
//             }
//         }
//     }
// };

const twoSum = (nums, target) => {
  const numsMap = {}; // Object of { diff: index }
  for (let i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]] >= 0) {
      // if nums[i] is the diff that exist (has index)
      return [numsMap[nums[i]], i];
    } else {
      // add { diff: index } to map
      const numberToFind = target - nums[i];
      numsMap[numberToFind] = i;
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 10, 29, 2, 4], 6));
