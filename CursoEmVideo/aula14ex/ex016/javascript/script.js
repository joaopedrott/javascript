function contar(){
var inicio = parseInt(window.document.getElementById('iini').value)
var fim = parseInt(window.document.getElementById('ifim').value)
var passo = parseInt(window.document.getElementById('ipas').value)


var res = window.document.getElementById('res')

res.innerHTML ='Contando: <br>'

//res.innerText+= passo
/**/
if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
    window.alert('Faltam dados!')
    res.innerText='Impossivel contar'
} else {
    if(passo==0){
        window.alert('passo 0 considerando passo 1')
        passo=1
    }

    if(inicio<fim) {
        //crescente
        for(var c = inicio;c<=fim;c+=passo){
            res.innerHTML+=` ${c} &#x1F449`
        }           
    } else {
        //regressiva
        for(var c = inicio;c>=fim;c-=passo){
             res.innerHTML+=` ${c} &#x1F449`
        }   
            
    }
    res.innerHTML += "&#x1F3C1" 
        
}




//res.innerText = `inicio ${inicio} fim ${fim} e o passo ${passo}`







}