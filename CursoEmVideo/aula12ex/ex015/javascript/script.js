function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else  {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') //inseri uma tag img dinamicamente com java script ao inves de usar html
        img.setAttribute('id','foto') //cria um id com nome foto para a imagem 

        img.style.height='250px' //formatacao da imagem
        img.style.width='250px' //formatacao da imagem
        img.style.borderRadius='250px' //formatacao da imagem
        //res.innerHTML = `Idade calculada: ${idade}`

        if(fsex[0].checked){//se genero selecionado for homem
            genero='Homem'
            if(idade>=0 && idade<10) {
                //bebe
                img.setAttribute('src', './imagens/bebeHOMEM.jpg')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', './imagens/jovemHOMEM.jpg')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', './imagens/adultoHOMEM.jpg')
            }else {
                //idoso
                img.setAttribute('src', './imagens/idosoHOMEM.jpg')
            }
        } else if (fsex[1].checked){//se genero selecionado for mulher
            genero='Mulher'
            if(idade>=0 && idade<10) {
                //crianca
                img.setAttribute('src', './imagens/bebeMULHER.jpg')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', './imagens/jovemMULHER.jpg')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', './imagens/adultoMULHER.jpg')
            }else {
                //idoso
                img.setAttribute('src', './imagens/idosoMULHER.jpg')
            }
        }
        res.style.textAlign='center'//centraliza o testo abaixo
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // imprimi na tela o sexo selecionado junto com a idade
        res.appendChild(img)//faz imprimir imagem img aparecer na tela de acordo com idade e sexo selecionado
    }

}