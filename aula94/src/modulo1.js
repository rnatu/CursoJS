

export const nome = 'Renato';
export const sobreNome = 'Xavier';
// export const idade = 30;

const cpf = 'jfhsdld';

// export default (x, y) => x * y;

// * export default function soma(x,y) {
// *     return x + y;
// * }

// * export {nome as default, sobreNome}

// * export { nome, sobreNome as segundoNome, idade, soma };

export default class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
}