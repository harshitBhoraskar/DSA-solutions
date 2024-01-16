/**
 * @param {number} n
 * @return {number}
 */

//  mathematic perm
// var countOrders = function(n) {
//     let ans = 1;
//     let MOD = 1_000_000_007;

//     for (let i = 1; i <= n; ++i) {
//         // Ways to arrange all pickups, 1*2*3*4*5*...*n
//         ans = ans * i;
//         // Ways to arrange all deliveries, 1*3*5*...*(2n-1)
//         ans = ans * (2 * i - 1);
//         ans %= MOD;
//     }

//     return ans;
// };

//  this rec + memo
//  let mode = 1_000_000_007;
//  let memo;
// var countOrders = function(n) {
    

//     memo = new Array(n+1).fill().map((_,a)=> new Array(n+1).fill(0))

//     return dp(  n , n )
// };

// function dp(unpicked, undev){


//     if( undev == 0 && unpicked == 0) return 1

//     if( undev < 0 || unpicked  <0 || undev <  unpicked) return 0;

//     if( memo[unpicked][undev] !=0) return memo[unpicked][undev]

//     let ans = 0;

//     ans +=  unpicked* dp( unpicked -1 , undev);

//     ans = ans % mode

//     ans+= (undev - unpicked) * dp(unpicked , undev-1)

//     ans = ans% mode

//     memo[unpicked][undev] = ans

//     return ans
// }

//  this is 2d dp

var countOrders = function(n) {
    // of( n == 1) return 
    let mod = 1_000_000_007;
    let dp = new Array(n+1).fill(0).map(()=> new Array(n+1).fill(0));
    // dp[0][0] = 1
    for( let unpicked =0 ;unpicked <= n ;unpicked++){

        for( let undiv = unpicked; undiv  <=n ; undiv++){

            if( unpicked  == 0 && undiv == 0){
                 dp[unpicked][undiv]  = 1;
                 continue;
                 }

            if( unpicked >  0) dp[unpicked][undiv]  += unpicked*dp[unpicked - 1][undiv]

            dp[unpicked][undiv] =  dp[unpicked][undiv] %mod

            if( undiv > unpicked) dp[unpicked][undiv] += (undiv-unpicked)*dp[unpicked][undiv - 1]

            dp[unpicked][undiv] =  dp[unpicked][undiv] %mod

        }
    }

    return dp[n][n]

}