const list1=[2,4,3],list2=[5,6,4];

function addTwoNumbers (l1, l2) {
    function reverseArr(input) {
        const array=[];

        for (let i= input.length-1 ; i >= 0 ; i-- ){
            array.push(input[i])
        }
        return array
    }

    const l1Reverse=reverseArr(l1)
    const l2Reverse=reverseArr(l2)

    const l1Num=l1Reverse.join('')
    const l2Num=l2Reverse.join('')

    const sum=Number(l1Num)+Number(l2Num)

    const sumArray=String(sum).split('')

    const sumArrayReverse=reverseArr(sumArray);

    return sumArrayReverse.map(Number)
}

addTwoNumbers(list1,list2)