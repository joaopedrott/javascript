function gerar(){
var numero = parseInt(window.document.getElementById('inum').value)
var tab = window.document.getElementById('seltab')

if(isNaN(numero)){
    window.alert('Por, favor digite um numero!')
    tab.innerHTML=""
}else {
    let n = numero
    tab.innerHTML=""
    let c = 1
    while(c<=10){
        let item = document.createElement('option')
        item.text=`${n} x ${c} = ${n*c}`
        item.value= `tab${c}`
        tab.appendChild(item)
        c++
    }
}







}