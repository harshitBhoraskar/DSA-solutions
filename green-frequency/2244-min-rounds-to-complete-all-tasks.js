// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

var minimumRounds = function(nums) {
    let count = 0
    let map = new Map()

    for(let i = 0; i < nums.length ;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for(let [key, val] of map){
        if(val === 1) return -1

        count += val % 3 !== 0 ? Math.floor(val / 3) + 1 : Math.floor(val / 3)
    }
    return count
};
