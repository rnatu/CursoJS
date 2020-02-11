/* função definida com a palavra function, usa o arguments, 
que sustenta todos os argumentos enviados */
function funcao(a, b, c) {
    //console.log(arguments[0]);
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
    console.log('');
};
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

////////////////////////////////////
function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

//////////////////////////////////
function funcao3(a, b = 0, c = 2) { //atribui um valor padrão para b e c caso não seja enviado argumento
    //b = b || 0;

    console.log(a + b + c);
    console.log('');

};
funcao3(5, undefined, 20); //para pular o argumento neste caso, a unica forma é enviando um argumento como undefined


/////////////////////////////// Atribuição via Desestrutuação de objeto
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
    console.log('');

}

//funcao4({nome: 'luiz', sobrenome:'otavio', idade: 28});
let obj = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 28
};
funcao4(obj);


///////////////////////////// Atribuição via Desestrutação de array
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
    console.log('');

};
const nomes = ['Renato', 'Luiz', 28];
funcao5(nomes);

//////////////////////////// rest operador ...
const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 20,30,40,50);

