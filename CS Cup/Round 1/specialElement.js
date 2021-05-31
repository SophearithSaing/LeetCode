var specialElement = function (arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    for (const [key, value] of Object.entries(map)) {
        if (value % 2 > 0) {
            console.log(key);
        }
    }
};
     
specialElement(['1', '2', '3', '1', '3', '4', '2', '3', '3']);               
specialElement(['2530', '2530', '2530', '2530', '640', '4534', '4534', '4534', '4534']);
specialElement(['6791', '6791', '1189', '2507', '4647', '4647', '4647', '6791', '4647', '2507', '6791', '1189', '2199', '2199', '6791']);