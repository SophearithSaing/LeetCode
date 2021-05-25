var mergeTwoLists = function (l1, l2) {
    let numberOfLoops = l1.length;
    if (l2.length > l1.length) {
        numberOfLoops = l2.length;
    }
    if (l1.length === 0) {
        return l2;
    } else if (l2.length === 0) {
        return l1;
    }
    let l3 = [];
    for (let i = 0; i < numberOfLoops; i++) {
        l3.push(l1[i]);
        if (l2[i] < l1[i]) {
            l3.splice(i, 0, l2[i]);
        } else {
            l3.push(l2[i]);
        }
    }
    return l3;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));