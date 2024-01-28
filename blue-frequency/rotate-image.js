// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

//  leet code 48

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    let n = matrix.length ; 
    let visited = new Set()
    for( let i=0; i< n;i++){

        for( let j=0; j< n; j++){
            
            let newRow =j ;
            let newC = n - 1 -i;
            let val = newRow+"-"+newC ; 
            let check = i+ "-" +j
            if( visited.has(check)   ) continue
            visited.add(val)
            let temp = matrix[newRow][newC]
            matrix[newRow][newC] = matrix[i][j];
            matrix[i][j] = temp
        }
    }

    
};

// optimized 

// var rotate = function(matrix) {
//     let temp ;
//     for(let row = 0 ; row < matrix.length ; row++){
//         for(let colm =matrix[row].length-1 ; colm > row; colm--){
//                 temp = matrix[ row][colm]
//                 matrix[row][colm ] = matrix[colm][row ]
//                 matrix[colm][row ] = temp ;
//             }

//             matrix[row].reverse()
//         }
// }