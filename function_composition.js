const functions = [x => x + 1, x => x * x, x => 2 * x]
const x = 4

const compose = function (functions) {
    return function (x) {
        let result = x

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }

        return result
    }
};

const fn = compose([])
console.log(fn(42))