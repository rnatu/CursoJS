
// * Importação das classes via desestruturação
// const { Gato } = require('../b/c/d/mod');
// const g1 = new Gato('Nina');
// g1.miar();

// * Importação das classes
// const classes = require('../b/c/d/mod');
// const g1 = new classes.Gato('Nina');
// g1.miar();

// * exportação de uma classe
module.exports = class Gato {
    constructor(nome) {
        this.nome = nome;
    }

    miar() {
        console.log(`${this.nome} está miando!`);
    }
}