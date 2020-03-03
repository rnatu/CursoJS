// * Objeto literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

const chave = 'nome';
console.log(pessoa[chave]);

console.log('');
// * Construtor do objeto
const pessoa1 = new Object();
pessoa1.nome = 'Renato';
pessoa1.sobrenome = 'Xavier';
pessoa1.idade = 28;

// Metodos
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`)
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log('');
// * Executando um metodo do objeto
console.log(pessoa1.falarNome());

console.log(pessoa1.getDataNascimento());
console.log('');

for (let chave in pessoa1) {
    // ? console.log(chave);
    console.log(pessoa1[chave]);
    
}

console.log('');
// * Deletando a chave
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

delete pessoa1.nome;
console.log(pessoa1);


console.log('');
// * Factory functions // Constructor functions / Classes

// * Factory
function criaPessoa (nome, sobrenome) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('Fernando', 'Oliveira');
console.log(p1.nomeCompleto);


console.log('');
// * Constructor - new (inicia com letra maiúscula);
function Pessoa(nome, sobrenome) {
    // o this irá representar no quem está criando ele no momento
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // trava qualquer objeto de efetuar manipulações externas no construtor

    //return this;
}

// new -> {} <- this -> this
const p2 = new Pessoa('Alex', 'Fernandes');
console.log(p2); //exibe tambem o construtor pessoa


const p3 = new Pessoa('Diego', 'Alves');
// ? Object.freeze(p3); <- Trava o objeto de efetuar manipulações no contrutor

// p3 = -> (Endereço na memoria) -> 'valor'
p3.nome = 'outra coisa'; //alterando valor do valor da constante
// ! p3 = 'outra coisa';
console.log(p3);
