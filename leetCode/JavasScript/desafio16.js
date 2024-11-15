var chunk = function(arr, size) {

    let result = []
    if(size==0) {
        return result
    } else{
        for(let i=0; i<arr.length; i+=size) {
            result.push(arr.slice(i, i+size))
        }
        return result
    }
    
};