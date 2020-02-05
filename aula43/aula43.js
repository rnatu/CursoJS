//Escreva uma função que recebe um numero e retorne o seguinte:
// numero é divisivel por 3 = Fizz
// numero é difisivel por 5 = Buzz
// numero é divisivel por 3 e 5 = fizzBuzz
// numero NÃO é difisivel por 3 ou 5 = numero
// checar se o numero é realmente um numero.
// use a função com numeros de 0 a 100



const fizzBuzz = (n) => {
    if (typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz % 3 e 5';
    if (n % 3 === 0) return 'Fizz % 3';
    if (n % 5 === 0) return 'Buzz % 5';
    return n;
}

for (let i = 0; i<=100; i++) {
    console.log(i, fizzBuzz(i));
    
}
