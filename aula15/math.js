let num1 = 9.54578;

// Arredondamento para baixo, numero inteiro mais proximo pra baixo.
//let num2 = Math.floor(num1)

// Arredondamento para cima, numero inteiro mais proximo acima.
//let num2 = Math.ceil(num1)

// Arredondamento para o numero inteiro mais próximo.
let num2 = Math.round(num1)
console.log(num2);

// Exibindo a raiz quadrada
let num3 = 9;
console.log(num3 ** 0.5);



// retorna o maior numero que foi apresentado
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// retorna o menor numero que foi apresentado
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//gera um numero aleatório entre 0 e 1
Math.random();

//gera um numero aleatório entra 5 e 10, e utiliza o metodo round para arredondar
const aleatorio = Math.round( Math.random() * (10 - 5) + 5 );
console.log(aleatorio);

// Potenciação 2 elevado a 10
console.log(2 ** 10);


// divisão por 0, retorna o valor Infinity
console.log(100 / 0);
