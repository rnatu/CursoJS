// map -> Sempre tem o mesmo tamanho do array original.
// utiliza os parametros valor, indice, array -> sendo indice e array opcionais

//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);
console.log('');

// * Dobre os números
const numerosEmDobro = numeros.map(valor => `O dobro de ${valor} é ${valor * 2}`);
console.log(numerosEmDobro);
console.log('');


// * Para cada elemento:
const pessoas = [
    { nome: 'Luiz', idade: 62},     // 0
    { nome: 'Maria', idade: 23},    // 1
    { nome: 'Eduardo', idade: 55},  // 2
    { nome: 'Leticia', idade: 19},  // 3
    { nome: 'Rosana', idade: 32},   // 4
    { nome: 'Wallace', idade: 47},  // 5
];

// * Retorne apenas uma string com o nome da pessoa
const nomeString = pessoas.map(obj => obj.nome);
console.log(nomeString);
console.log('');

// * Remova apenas a chave "nome" do objeto
const removeChaveNome = pessoas.map(obj => ({idade: obj.idade}));
console.log(removeChaveNome);
console.log('');

// * Adicione uma chave de id em cada objeto
const pessoasComId = pessoas.map((obj, indice) => {
    const newObj = {...obj}; //copiando o objeto original (pessoas), para que não seja alterado o objeto original
    newObj.id = indice;
    return newObj;
});
console.log(pessoasComId);















