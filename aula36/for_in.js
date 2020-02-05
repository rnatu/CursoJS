// For in -> le os indices ou chaves do objeto

// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i]);  
// }

const pessoa = {
    nome: 'Luiz',    
    sobrenome: 'Otávio',
    idade: 30
}


for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);     
}

console.log('');


console.log(pessoa.nome);

const chave = 'nome'
console.log(pessoa[chave]);
// console.log(pessoa['nome']);



// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]s);

// };