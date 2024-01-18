// You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

// Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

// Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

var minimizeMax = function(nums, p) {
    nums = nums.sort((a,b)=> a-b);

    let n = nums.length -1;
    let r = nums[n]-nums[0];
    let l = 0


    while( l< r){

        let m = Math.floor(((l+r)/2))

        if( countPairs(nums, m) >= p) r = m
        else l = m+1
    }

    return l
};

function countPairs(nums, m){

    let i=0;
    let count =0;

    while( i < nums.length -1){
        if( nums[i+1] - nums[i] <= m) {
            count++;
            i++
        }
        i++
    }
return count;
}