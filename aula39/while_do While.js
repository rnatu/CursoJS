function random(min, max) {

    const r = Math.random() * (max - min) + min;
    
    return Math.floor(r);
}
const min = 1;
const max = 50;
let vezes = 0;
let rand = 10 //random(min, max);


// while (rand !== 10) {
//     rand = random(min, max);
//     vezes++;

// }
// console.log(vezes);


console.log('');


do {
    rand = random(min, max);
    vezes++;
} while (rand !== 10);

console.log(vezes);
