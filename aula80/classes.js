//Classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

}

//Constructor function 
function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}


//Classe
const p1 = new Pessoa('Renato', 'Xavier');
p1.falar();

//Constructor function
const p2 = new Pessoa2('Alex', 'Silva');
p2.falar();
