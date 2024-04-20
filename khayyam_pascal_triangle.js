const numsRow=6
const generate = function(numRows) {
    const array=[];

    for (let i = 0; i < numRows ; i++) {
        const numArray=String(Math.pow(11,i)).split('').map(n=>Number(n))
        array.push(numArray)
    }
    console.log(array)
    return array
};

generate(numsRow)