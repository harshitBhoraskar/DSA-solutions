// You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si.

// For example, for s = "abaca", s1 == "a", s2 == "ca", s3 == "aca", etc.
// The score of si is the length of the longest common prefix between si and sn (Note that s == sn).

// Given the final string s, return the sum of the score of every si.

// Input: s = "babab"
// Output: 9
// Explanation:
// For s1 == "b", the longest common prefix is "b" which has a score of 1.
// For s2 == "ab", there is no common prefix so the score is 0.
// For s3 == "bab", the longest common prefix is "bab" which has a score of 3.
// For s4 == "abab", there is no common prefix so the score is 0.
// For s5 == "babab", the longest common prefix is "babab" which has a score of 5.
// The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.


/**
 * @param {string} s
 * @return {number}
 */

 // read as much about z-algorithm as you can
 var sumScores = function(s) {
    let n = s.length;
    let res = n;
      let z = new Array(n+1);
    let l = 0;
    let r = 1;
    let c = 0;
  
    for (let i = 1; i < n; i++) {
      if (i < r) c = Math.min(z[i - l], r - i);
      else c = 0;
  
      while (s[c] == s[i + c]) c++;
      z[i] = c;
      res += c;
  
      if (i + c > r) {
        l = i;
        r = i + c;
      }
    }
    return res;
  };