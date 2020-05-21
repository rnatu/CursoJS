// * exportando diretamente a função
// module.exports = function (x, y) {
//     return console.log(x * y);
// }
// ? utilizando a função acima
// module.exports(2,5);

// * exportando um numero
// module.exports = 2;

// * exportando uma classe 
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome
    }

    latir() {
        console.log(`${this.nome} está fazendo au au!`);
    }
}

// * exportação de varias classes
// // classe 1
// class Cachorro {
//     constructor(nome) {
//         this.nome = nome
//     }

//     latir() {
//         console.log(`${this.nome} está fazendo au au!`);
//     }
// }

// // classe 2
// class Gato {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     miar() {
//         console.log(`${this.nome} está miando!`);
//     }
// }

// // exportação
// module.exports = {
//     Cachorro, Gato
// }
// console.log(module);