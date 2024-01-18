// You are given an integer array nums and an integer k.

// For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after changing the values at each index.

var smallestRangeII = function(nums, k) {
    let n = nums.length ;
    if( n == 1) return 0
    nums = nums.sort((a,b)=> a-b);
    let ans = nums.at(-1) - nums[0]
    for( let i=0; i< nums.length-1; i++){

        let curr = nums[i]
        let high = Math.max(curr+k, nums[n-1] -k)
        let low = Math.min (nums[0]+k, nums[i+1] - k)
        ans = Math.min(ans, high -low)
    }
   return ans
}