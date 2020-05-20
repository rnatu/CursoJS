// * importando o objeto inteiro --- Quando se utiliza caminho, são modulos que nós criamos
// const modulo1 = require('./mod1');
// const nome = modulo1.primeiroNome;

// console.log(modulo1.falaNome());
// console.log(nome);


// * Importando por atribuição via desestruturação
// const {primeiroNome, sobrenome, falaNome} = require('./mod1');
// console.log(falaNome(), primeiroNome, sobrenome);


// * importando somente uma chave do objeto
// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// * importando modulos padrão, ou instalados via npm não quererem o caminho
// padrão
const path = require('path');
// instalado
const axios = require('axios');
// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));


// * importanto a classe e removendo a chave pessoa de dentro do objeto do exports - utilizando desestruturação
const { Pessoa, frase, falaNome }  = require('./mod1');
console.log(frase)
console.log(falaNome())

const p1 = new Pessoa('Renato');
console.log(p1);
