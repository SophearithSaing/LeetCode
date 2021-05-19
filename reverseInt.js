var reverse = function (x) {
    let negative = false;
    if (x < 0) {
        x = -x
        negative = true;
    }
    let currentMod = x % 10;
    let reverse = currentMod;
    x = Math.floor(x / 10);
    while (x > 0) {
        currentMod = x % 10;
        x = Math.floor(x / 10);
        reverse = reverse * 10 + currentMod;
    }
    if (reverse > 2**31-1) {
        return 0;
    }
    if (negative) {
        reverse = -reverse;
    }
    return reverse;
};

reverse(-123);
reverse(120);
reverse(-1201);