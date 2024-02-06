/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


var coinChange = function(coins, amount) {
    //  memo approach
        // if( amount == 0) return 0
        //  let memo = new Array(amount + 1).fill(undefined);
        // function rec(sum ){
    
        //     if( sum == 0) return 0;
        //     if( sum < 0) return -1;
    
        //     if( memo[sum] !== undefined) return memo[sum];
        //     let min = Number.MAX_VALUE;
        //     for( let coin of coins){
        //             if( sum - coin >=0){
        //             let count = rec(sum - coin);
        //             if( count != -1) min = Math.min(count+1, min)
        //         }
        //     }
        //     memo[sum] = (min == Number.MAX_VALUE) ? -1 : min
        //     return memo[sum]
        // }
    
        // rec(amount)
        // return memo[amount]
    
    //  iter
    
    let dippi =new Array(amount+1).fill(-1);
    dippi[0] = 0;
    
    for( let c of coins)dippi[c] = 1;
    
    for( let i=0; i<= amount; i++){
        if( dippi[i] == -1) continue;    
        for( let c of coins){
            if(i+c <= amount){
                if( dippi[i+c] == -1 || dippi[i+c]> dippi[i]+1) dippi[i+c] = dippi[i]+1 
            }
        }
    }
    
    // console.log(dippi)
    return dippi[amount]
    } 