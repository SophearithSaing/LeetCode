var reverse = function (x) {
    let negative = false;
    if (x < 0) {
        x = -x
        negative = true;
    }
    console.log(x)
    let currentMod = x % 10;
    let reverse = currentMod;
    x = Math.floor(x / 10);
    while (x > 0) {
        currentMod = x % 10;
        x = Math.floor(x / 10);
        reverse = reverse * 10 + currentMod;
        console.log(x, currentMod, reverse);
    }
    while (reverse % 10 === 0) {
        reverse = Math.floor(reverse / 10);
    }
    if (negative) {
        reverse = -reverse;
    }
    return console.log(reverse);
};

reverse(-123);
reverse(120);
reverse(-1201);