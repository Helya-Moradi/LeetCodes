const nums = [3,6]
const fn = function sum(accum, curr) {
    return accum + curr * curr;
}

const init = 100

const reduce = function (nums, fn, init) {

    let result = init

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }

    return result

};

reduce(nums, fn, init)