// function* test(input){
//     yield input
//     yield input+5
// }
//
// const tst=test(10)
//
// console.log(tst.next())
// console.log(tst.next())
// console.log(tst.next())
//
//
// // FIB: 1 1 2 3 5 8 13 21 ...
// function* fibonacci(count) {
//     let a = 1;
//     let b = 1;
//
//     for (let i = 0; i < count; i++) {
//         yield a;
//
//         [a, b] = [b, a + b];
//     }
// }
//
// const fib = fibonacci(10);
//
// function generatorIterator(generator, callback) {
//     while(true) {
//         const res = generator.next();
//
//         if (!res.done) {
//             callback(res.value);
//         } else {
//             break;
//         }
//     }
// }

// for (let f of fib) {
//     console.log(f)
//
//     if (f > 400) {
//         break;
//     }
// }
//
// generatorIterator(fib, (val) => {
//     console.log(val);
// })

const arr = [[[6]], [1, 3], []]


const inorderTraversal = function* (arr) {
    for (const arrayElement of arr) {
        if (typeof arrayElement !== "number") {
            yield* inorderTraversal(arrayElement)
        } else {
            yield arrayElement
        }
    }
};

const gen = inorderTraversal(arr)

for (const genElement of gen) {
    console.log(genElement)
}
