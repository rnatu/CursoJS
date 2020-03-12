// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};
 //objA.__proto__ === Object.prototype

const objB = {
    chaveA: 'B'
    // __proto__: -> objA -> Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';
// __proto__: -> objB -> objA -> Object.prototype

// ! Não mexer com __proto__
// * Para acessar o __proto__ de um objeto utilize Object.getPrototypeOf()
Object.getPrototypeOf(objA);

Object.setPrototypeOf(objB, objA); //setando o prototype do objB para ser do objA
Object.setPrototypeOf(objC, objB); //setando o prototype do objC para ser do objB (pegando tambem o objA)
console.log(objB.chaveA);
console.log('');


// * Exemplos
function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const p1 = new Produto('Camisa', 650);
p1.desconto(50);
//p1.aumento(20);
console.log(p1);


// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype); //criando o objeto e já setando o prototype
p3.nome = 'Relógio' //criando a chave
p3.preco = 113 //criando a chave
p3.aumento(10);
console.log(p3);