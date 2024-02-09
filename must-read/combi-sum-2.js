//  40 combination sum 2
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    let comb = [];
    candidates = candidates.sort((a,b)=>a-b)
   function rec (t, start){

       if( t == 0 ) {
           res.push([...comb])
           return;
           }



       for( let i=start; i< candidates.length ;i++){
            if (candidates[i] <= t) {
           if(i > start && candidates[i] == candidates[i-1]) continue
           comb.push(candidates[i])
           rec(t - candidates[i] ,i+1 )
           comb.pop()
            }
       }
   }

   rec(target ,0)

   return res;
};