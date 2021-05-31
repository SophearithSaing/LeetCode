var specialElement = function (arr) {
    let longest = 0;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            current++;
        } else if (current > longest) {
            longest = current;
            current = 0;
        } else {
            current = 0;
        }
        if (current > longest && i === arr.length - 1) {
            longest = current;
            current = 0;
        }
    }
    console.log(longest);
};

specialElement([1, 1, 0, 0, 0, 1, 1, 1, 1, 0]);
specialElement([0, 0, 1, 1, 1]);