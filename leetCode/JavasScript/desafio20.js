//2727. Is Object Empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Object.keys(obj).length===0) {
        return true
    } else {
        return false
    }
    //return Object.keys(obj).length === 0;
};