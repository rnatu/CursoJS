
const nomes = ['Luiz', 'Otávio', 'Henrique'];

// Classico - Geralmente com iteráveis (arrays ou strings)
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);  
}
console.log('');

//for in -> indice      -> Funciona com objetos
for (let i in nomes) {  //-> retorna indice/chave (arrays, strings ou objetos)
    console.log(nomes[i]);   
}
console.log('');

//for of -> valor       -> Retorna o valor em si (arrays ou strings)
for (let valor of nomes) {
    console.log(valor);
};
console.log('');

//forEach
nomes.forEach( function(valor, indice, array) {
    console.log(valor, indice, array);
})

