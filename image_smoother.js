const img = [[1,1,1],[1,0,1],[1,1,1]]

function imageSmoother (img) {

    function getAverage(i,j){
        let avg=0
        let count=0

        for (let m = i-1 ; m <= i+1 ; m++){
            for (let n = j-1 ; n <= j+1 ; n++){
                if(m >= 0 && m < img.length && n >= 0 && n < img[i].length ){
                    avg+=img[m][n]
                    count++;
                }
            }
        }

        return Math.floor(avg / count)
    }

    let resultArray=[];

    for (let i= 0 ; i < img.length ; i++){

        let array=[];
        for (let j = 0 ; j < img[i].length ; j++){
            array.push(getAverage(i,j))
        }

        resultArray.push(array)
    }

    return resultArray
}

console.log(imageSmoother(img))