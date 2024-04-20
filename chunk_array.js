const arr = [1, 2, 3, 4, 5]
const size = 3

const chunk = function (arr, size) {
    let newArray = []

    const maxLength = Math.ceil((arr.length ) / size)

    for (let i = 0; i < maxLength; i++) {
        const t = arr.splice(0, size)
        newArray.push(t)
    }

    return newArray
};

chunk(arr, size)