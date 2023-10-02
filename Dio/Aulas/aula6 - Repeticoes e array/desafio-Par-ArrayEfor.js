function par(array){
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2===0){
            console.log(array[index])
        } 
        //const element = array[index];
    }
}

(function() {
    const lista=[2,3,1,5,6,7,8,9,10,22,11]
    par(lista)
    //console.log()
})();