// 39 combination sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    // let count =0;
    let res = []
    function rec (t, comb, start){
    console.log(t, comb)

        if( t == 0) {
            res.push(comb)
            return;
            }
        if(t < 0) return;


        for( let i=start; i< candidates.length ;i++){
             if (candidates[i] <= t) {
            rec(t - candidates[i] ,[...comb, candidates[i]],i )
             }
        }
    }

    rec(target , [],0)

    return res;
};