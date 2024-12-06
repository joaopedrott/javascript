//2626. Array Reduce Transformation

var reduce = function(nums, fn, init) {
    let accum = init
    
    nums.forEach((curr)=>{
         
        accum=fn(accum,curr)
        
    })
    
    return accum
};



let nums = [1,2,3,4];

const fn = function sum(accum, curr) {
    return accum + curr; 
}

let init= 0

console.log(reduce(nums,fn,init))