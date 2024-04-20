const firstString="TO BE OR NOT TO BE";

function printVertically(string){
    const words=string.split(' ')

    const maxLength= Math.max(...(words.map(el => el.length)));
    const newArray=[];

    for (let i = 0 ; i < maxLength ; i++ ){
        let newWord='';

        for (let j = 0 ; j < words.length ; j++ ){
            if(words[j][i]){
                newWord+=words[j][i]
            }else {
                newWord+=' ';
            }
        }

        newArray.push(newWord.trimEnd())

    }

    return newArray
}