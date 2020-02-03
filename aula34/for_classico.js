
// i - index
for (let i = 500; i>= 400; i -= 10) {
    console.log(`linha ${i}`); 
}

console.log('');


for (let i = 0; i <= 10; i++) {
    const parOuImpar = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, parOuImpar);
}

console.log('');


//                0       1       2
const frutas = ['Maçã', 'Pera', 'Uva', 'Mamão', 'Goiaba', 'Manga', 'Uva Verde'];

console.log(frutas.length); //saber quantos elementos tem em um array
console.log(' ');


for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}`, frutas[i]);
    
}