// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// recursive + memo  =  O(mxn), O(mxn)

var numDistinct = function(s, t) {
    if( t.length > s.length) return 0;
    if( s == t) return 1;
    let map = new Map();
    // let count  = 0;


     function rec(i, j , str){

         if( map.has(`${i}_${j}`)) {
             
             return map.get(`${i}_${j}`)
         }
         if( i == s.length || j == t.length) {
        if( str == t || j== t.length) {
            return 1 ;
        }
    return 0
         }
        
        let count  =0
        if( s[i] == t[j]){
         count += rec( i+1,j+1, str+s[i]  )
         count += rec(i+1 , j, str)
         
        }else{
            count += rec(i+1, j, str)
        }

        map.set(`${i}_${j}` , count)
        return count
     }


     
     return rec(0,0, "")
};


// bom up  mxn , mxn

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function create2DArray(rows, cols) {
    const arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(0);
    }
    return arr;
}

var numDistinct = function (s, t) {
    const n = s.length;
    const m = t.length;
    let dp = create2DArray(n + 1, m + 1);

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }
    // for (let j = 1; j <= m; j++) {
    //     dp[0][j] = 0;
    // }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][m];
};

// bom up optimized O(mxn) O(m)

var numDistinct = function(s, t) {
    const length = t.length
    const sequence = new Array(length + 1).fill(0)
    sequence[0] = 1
    for (const sourceChar of s) {
        for (let i = length; i > 0; --i) {
            const targetChar = t[i - 1]
            if (sourceChar === targetChar) {
                sequence[i] += sequence[i - 1]
            }
        }
    }
    return sequence[length]
}