class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
        this.anoDeNascimento=2023-idade;
    }

    descrever(){
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
    }
}

function compararPessoas(p1,p2){
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} eh mais velho que ${p2.nome}`)
    } else if(p2.idade>p1.idade){
        console.log(`${p2.nome} eh mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }

}

(function(){
    const vitor = new pessoa('Vitor', 25);
    const renan = new pessoa('Renan', 30);
    //console.log(vitor.descrever());
    const comparar = compararPessoas(vitor,renan)
    

})()