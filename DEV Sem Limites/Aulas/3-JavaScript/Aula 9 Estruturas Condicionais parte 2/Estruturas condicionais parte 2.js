//Estruturas condicionais parte 2
//switch

let fruta = 'melancia'

switch (fruta) {
    case 'morango':
        console.log('O valor do morango e R$ 10,00')
        break;
    case 'laranja':
        console.log('O valor da laranja e R$ 15,00')
        break;
    case 'melao':
    case 'melancia':
        console.log('O valor do melao e melancia e R$ 12,00')
        break;

    default:
        console.log('Nao foi possivel definir o valor da fruta')
        break;
}
