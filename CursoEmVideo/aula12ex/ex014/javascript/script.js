function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    

    msg.innerText= `A hora atual sao ${hora} horas e ${minutos} minutos`
    
    if(hora>=0 && hora<12){
        //bom dia
        img.src='./imagens/manha.jpg'
        window.alert('Bom dia!')
        document.body.style.background='#e2cd9f'
    }else if(hora>=12 && hora<18){
        //boa tarde
        img.src='./imagens/tarde.jpg'
        window.alert('Boa tarde!')
        document.body.style.background='#b9846f'
    }else{
        //boa noite
        img.src='./imagens/noite.jpg'
        window.alert('Boa noite!')
        document.body.style.background='#515154'
    }
}
