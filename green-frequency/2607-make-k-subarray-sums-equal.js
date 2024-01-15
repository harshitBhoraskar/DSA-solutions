/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// method
//  gcd = greatest common divisor,
// You are given a 0-indexed integer array arr and an integer k. The array arr is circular. In other words, the first element of the array is the next element of the last element, and the last element of the array is the previous element of the first element.

// You can do the following operation any number of times:

// Pick any element from arr and increase or decrease it by 1.
// Return the minimum number of operations such that the sum of each subarray of length k is equal.

// A subarray is a contiguous part of the array.

// separate the array for each possible sub array, since k is constant, 
//  we know the start and end of each subarr.
// Intuition
// Subarray Equal Sum
// If every kkk-subarray has equal sum, then we have:
// a0+a1+⋯+ak−1=a1+⋯+ak−1+ak⇒a0=aka
 
// And this applies to every other index, we would now have:
// ai=ai+ka_i = a_{i + k}a 
// i
// ​
//  =a 
// i+k
// ​
//   for every valid index iii.
// Not only that, our array is defined to be circular, which means when i+ki+ki+k goes out of bounds it "wraps" back to the beginning. For example, when n=6n = 6n=6 and k=4k = 4k=4, we got
// a0=a4
// a1=a5
// a_0 = a_4
// a_1 = a_5
// a0=a4
// a1=a5
 
// and when the index "wraps" we have
// a2=a0
// a3=a1
// a4=a2
// a5=a3
// a_2 = a_0 
//  a_3 = a_1 
// a_4 = a_2
// a_5 = a_3a 
// If you focus on the pattern you can see that we actually got two "chains":
// a0=a4=a2=a0a1=a5=a3=a1a_0 = a_4 = a_2 = a_0 
// a_1 = a_5 = a_3 = a_1
// a0=a4=a2 =a0
// a1=a5=a3=a1
// ​

 
var makeSubKSumEqual = function(arr, k) {
    let res = 0;
    let n = arr.length ;
    for( let i=0; i< k;i++){

        let list = []

        for( let j=i; arr[j] !=0 ; j = (j+k)%n){

            list.push(arr[j]);
            arr[j] = 0;

        }

        list.sort((a,b)=> a-b)
        //  since reaching middle of the array is the smallest effort
        for( let l=0; l  < list.length ; l++) res += Math.abs(list[l] - list[Math.floor(list.length/2)])
    }
    return res
};