// //  216 combination sum 3
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if(k> n) return [];

     let res = [];

     function getCombo(l,m, combo, start){

        if( m == 0  && combo.length == l){

            res.push(combo)
            return  ;
        }
        if( combo.length == l) return;

        for( let i=start; i<=9 ; i++){
            if( i <= m ){
            getCombo(l, m-i, [...combo, i], i+1)
            }

        }

        
     }

     getCombo(k,n, [], 1);
     return res;
};