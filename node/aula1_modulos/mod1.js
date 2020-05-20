class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

}
const nome = 'Luiz';
const sobrenome = 'Miranda';
const frase = 'Eu sou uma frase';
const falaNome = () => nome + ' ' + sobrenome;

// * o objeto module
//console.log(module);
// * Maneiras de exportar como objeto
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.primeiroNome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// this.qualquerCoisa = 'Oque eu quiser exportar';

// console.log(module.exports)



//  * lembrando que exports é um objeto
// exports.Pessoa = Pessoa;


// * "Criando o próprio module.exports" 
// ! não funciona se usar somente o exports sem o module.exports
module.exports = {
    frase, Pessoa, falaNome
}
