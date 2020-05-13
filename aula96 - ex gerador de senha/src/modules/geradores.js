// * Tabela ASCII - EX: console.log(String.fromCharCode(48))

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const geraMaiuscula = () => String.fromCharCode(rand(65,90));
const geraMinuscula = () => String.fromCharCode(rand(97,122));
const geraNumero = () => Number(String.fromCharCode(rand(48,57)));
// const geraSimbolo = () => String.fromCharCode(rand(33,47));
const simbolos = ',.;~^[]{}!@#$%*()_+-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];
// console.log(geraMaiuscula(), geraMinuscula(), geraNumero(), geraSimbolo());


export default function geraSenha(qtd, maiusculas, minuscula, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);


    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    //console.log(senhaArray.join('').slice(0, qtd))
    return senhaArray.join('').slice(0, qtd);
}
