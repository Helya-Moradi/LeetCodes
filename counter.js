const n = -2
const array = ["call","call","call","call","call"]

const createCounter = function (n) {
    let count = 0

    return function () {
        const result = count === 0 ? n : n = n + 1
        count += 1
        return result
    };
};

const counter = createCounter(n)

for (const arrayElement of array) {
    console.log(counter())
}