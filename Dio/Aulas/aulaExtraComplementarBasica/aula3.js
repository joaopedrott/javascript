// Trabalhando com classes com javascript
//projeto pokemon usando classe

//1
class Pokemon {
    constructor(name){
        this._name = name
    }
    _randomNumber(min, max){
        return Math.floor(Math.random()* (max-min +1)+ min)
    }
    static type = 'Spicies'

    randomPower(){
        const random = this._randomNumber(1,10)
        return random
    }

/*     get name(){
        return this._name
    }

    set name(value) {
        this._name = `${value.toUpperCase()}`
    } */

}
//heranca
class Charmander extends Pokemon {
    constructor(){
        super('Charmander')
        console.log(super.randomPower())
    }
}

const charmander = new Charmander()
//console.log(charmander.randomPower())
//console.log(charmander)

//obs: para mostrar valor static
/*So da se for chamado pela classe e nao pelo objeto*/
//console.log(Pokemon.type)



//Outro jeito de criar uma classe usando funcao
/*
const poke = Pokemon('charmander)

function Pokemon(_name){
    return {
        _name
    }
}

console.log(poke)

*/

//2 o *use strict*
/*
usando o use strict o codigo fica mais rigoroso a falhas do programador a algo que ele esqueceu de declarar por exempo
    Coloca o *use strict* no topo do codigo
*/

//--------------------------------
//Propriedades e metodos estaticos