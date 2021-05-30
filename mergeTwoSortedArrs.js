var merge = function (nums1, m, nums2, n) {
    let numberOfLoops = m;
    if (n > m) {
        numberOfLoops = n;
    }
    if (m === 0) {
        return nums2;
    } else if (n === 0) {
        return nums1;
    }
    for (let i = 0; i < numberOfLoops; i++) {
        if (nums2[i] < nums1[i]) {
            nums1.splice(i, 0, nums2[i]);
        } else {
            nums1.push(nums2[i]);
        }
    }
    console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);