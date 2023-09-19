let numero = window.document.getElementById('inum')
var res = window.document.getElementById('res')
var lista = []
var tab = window.document.getElementById('igrupo')



function adicionar(){
    numero = parseInt(numero.value)
    if (lista.includes(numero) || numero <1 || numero>100 || Number.isNaN(numero)){
        window.alert('Numero invalido ou ja encontrado na lista')

    } else {
        let item = window.document.createElement('option')
        lista.push(numero)
        item.text=`o varlor ${numero} foi adicionado`
        item.value= `tab${numero}`
        tab.appendChild(item)
    }
} 

function somando(){
    let soma=0
    for(let posicao in lista){
        soma += lista[posicao]
    }
    return soma
}

function finalizado(){
    if(lista.length==0){
        window.alert(`Adicione valores antes de finalizar`)
    } else {
        
        lista.sort()
        res.innerHTML =`<br>Ao todo, temos ${lista.length} numeros cadastrados.<br>`
        res.innerHTML += `<br>O maior valor informado foi ${lista[lista.length-1]}.<br>`
        res.innerHTML += `<br>O menor valor informado foi ${lista[0]}. <br>`
        let soma=somando()
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML +=`<br>A media de todos os valores e ${parseFloat(soma/lista.length)}<br>`
    }
    

}