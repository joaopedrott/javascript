//2619. Array Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
        if(this.length ===0 ){
            return -1
        } else {
            return this[this.length-1]
        }
    };
    
    /**
     * const arr = [1, 2, 3];
     * arr.last(); // 3
     */

    //Este codigo retorna o ultimo elemento da array se caso nao existir ele retorna -1