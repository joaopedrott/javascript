//2618. Check if Object Instance of Class

var checkIfInstanceOf = function(obj, classFunction) {
  if(obj === null || typeof obj === 'undefined' || typeof classFunction !== 'function') {
    return false
  }

  if (typeof obj === 'number' && classFunction === Number || classFunction === Object) {
    return true;
  }
  if (typeof obj === 'string' && classFunction === String || classFunction === Object) {
    return true;
  }
  if (typeof obj === 'boolean' && classFunction === Boolean || classFunction === Object) {
    return true;
  }
  if (typeof obj === 'bigint' && classFunction === BigInt || classFunction === Object) {
    return true;
  }
  if (typeof obj === 'symbol' && classFunction === Symbol || classFunction === Object) {
    return true;
  }


  if(obj instanceof classFunction) {
    return true
  } else {
    return false
  }
};

let result = checkIfInstanceOf({}, Number);
console.log(result);