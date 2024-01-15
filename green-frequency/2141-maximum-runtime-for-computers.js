var maxRunTime = function(n, batteries) {
    let sum = 0; 

    for( let bat of batteries) sum+= bat
    let left = 1;
    let right = Math.ceil(sum/n)
    console.log(sum, left, right)
    while( left  < right){

        let target = Math.ceil( right - ((right - left)/2));

        let extra = 0;

        for( let pow of batteries) extra += Math.min(pow, target)

        if( extra  >= (n * target)) left = target
        else right  =  target - 1

    }
    return left;
};