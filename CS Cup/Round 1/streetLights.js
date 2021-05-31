var specialElement = function (arr) {
    let alice = {
        light: 0,
        duration: 0
    };
    let bob = {
        light: 0,
        duration: 0
    };
    let j = Math.ceil(arr.length / 2);
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        if (arr[i] > 0) {
            alice.light++;
            alice.duration = alice.duration + arr[i];
        }
        if (arr[j] > 0) {
            bob.light++;
            bob.duration = bob.duration + arr[i];
        }
        j++;
    }
    if (alice.light > bob.light) {
        console.log(alice.light, bob.light);
        console.log('Alice');
    } else if (bob.light > alice.light) {
        console.log(alice.light, bob.light);
        console.log('Bob');
    } else if (alice.duration > bob.duration) {
        console.log(alice.light, bob.light);
        console.log('Alice');
    } else if (bob.duration > alice.duration) {
        console.log(alice.light, bob.light);
        console.log('Bob');
    } else {
        console.log(alice.light, bob.light);
        console.log('Draw');
    }
};

specialElement([1, 0, 0, 10, 0, 5, 2, 0, 1, 0]);