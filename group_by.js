const array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
];

const fn = function (list) {
    return String(list[0]);
}

Array.prototype.groupBy = function (fn) {
    const obj = {};

    this.forEach(item => {
        const key = fn(item);

        if (!obj[key]) {
            obj[key] = [item];
        } else {
            obj[key].push(item);
        }
    })

    return obj;
};

console.log(array.groupBy(fn))