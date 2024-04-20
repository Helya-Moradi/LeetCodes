const inputGrid=[
    ['1','1','1','0'],
    ['1','0','1','1'],
    ['1','0','1','0'],
    ['0','0','1','1'],
]

function numIslands(grid){
    let islandsNum = 0;

    function processCell(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] !== '1') {
            return;
        }

        grid[i][j] = '2';

        processCell(i - 1, j);
        processCell(i, j + 1);
        processCell(i + 1, j);
        processCell(i, j - 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandsNum++;

                processCell(i, j);
            }
        }
    }

    return islandsNum;
}

// numIslands(inputGrid)
console.log(numIslands(inputGrid))