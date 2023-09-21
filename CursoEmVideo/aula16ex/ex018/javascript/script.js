let numero = window.document.getElementById('inum')
var res = window.document.getElementById('res')
var lista = []
var tab = window.document.getElementById('igrupo')



function adicionar(){
    //numero = parseInt(numero.value)
    if (lista.includes(numero.value) || numero.value <1 || numero.value>100 || Number.isNaN(numero.value)){
        window.alert('Numero invalido ou ja encontrado na lista')

    } else {
        let item = window.document.createElement('option')
        lista.push(numero.value)
        item.text=`o varlor ${numero.value} foi adicionado`
        item.value= `tab${numero.value}`
        tab.appendChild(item)
    }
    inum.value = ''
    inum.focus()
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
        res.innerHTML=''
        lista.sort()
        res.innerHTML =`<p>Ao todo, temos ${lista.length} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lista[0]}. </p>`
        //let soma=somando()
        res.innerHTML += `<p>Somando todos os valores, temos ${somando()}.</p>`
        res.innerHTML +=`<p>A media de todos os valores e ${parseFloat(somando()/lista.length)}</p>`
    }
    

}