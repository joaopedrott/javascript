var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segungos = agora.getSeconds()
console.log(`Agora sao exatamente ${hora} horas ${minuto} minutos e ${segungos} segundos`)
if(hora<12){
    console.log('Bom dia!')
} else if(hora<=18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}