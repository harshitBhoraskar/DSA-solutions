// my code
var partitionString = function(s) {
    let set = new Set();
    let count = 0;
    for( let  i=0; i< s.length; i++){
        if( set.size == 0){
            set.add(s[i]);
            count++;
            continue
        }else if( set.has( s[i])){

            set = new Set()
            set.add(s[i])
            count++
            continue;
        }else {
            set.add(s[i])
        }
    }

    return count;  
};

//  space optimized 

var partitionString = function(s) {
    let lastSeen = [];
     let count = 1, substringStart = 0;
     for (let i = 0; i < 27; i++) {
         lastSeen[i] = -1;
     }
 
     for (let i = 0; i < s.length; i++) {
         if (lastSeen[s.charCodeAt(i) - 97] >= substringStart) {
             count++;
             substringStart = i; 
 
         }
         
         lastSeen[s.charCodeAt(i) - 97] = i
     }
     return count;
 };