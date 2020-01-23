/*
function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Renato', 'Xavier', 29);

console.log(pessoa1);
*/

const pessoa2 = {
    nome: 'Renato',
    sobrenome: 'Xavier',
    idade: 29,


    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
        
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();



