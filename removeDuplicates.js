// var removeDuplicates = function (array) {
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array.length; j++) {
    //         while (array[i] === array[j] && i !== j) {
    //             array.splice(j, 1);
    //         }
    //     }
    // }
    // return array.length;
// };

// Faster solution
// var removeDuplicates = function (array) {
//     for (let i = 0; i < array.length; i++) {
//         while (array[i] === array[i + 1]) {
//             array.splice(i + 1, 1);
//         }
//     }
//     return array.length;
// };

// Hash maps solution
const removeDuplicates = function (array) {
    const maps = {};
    for (let i = 0; i < array.length; i++) {
        if (maps[array[i]]) {
            array.splice(i, 1);
            i--;
        } else {
            maps[array[i]] = true;
        }
    }
    return array.length;
};

console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([0, 0, 0, 0, 0]));
console.log(removeDuplicates([2, 2, 2, 2, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 1, 1, 2, 2, 3, 3, 4, 4]));