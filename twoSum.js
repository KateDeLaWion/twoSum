
let nums = [2,8,7,1,5];
let target = 9;

let myMap = {};
    for(let i=0; i < nums.length; i++){
    let complement = target - nums[i] ;
    if (myMap[complement] !== undefined) {
    console.log ( [myMap[complement], i] )
    }
    else
    myMap[nums[i]] = i ;
    }