const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome; //atribuição normal

// Atribuição via desestruturação
// const { nome: n = '', sobrenome, idade } = pessoa;
// console.log(n, sobrenome);

// const { endereco: {rua, numero} } = pessoa; // extraindo os atributos rua e numero, para as variaveis rua e numero.
// console.log(rua);

const { nome, ...resto } = pessoa; //utilizando o operador ...rest
console.log(resto);




// const { endereco: {rua: r = 'Não existe', numero},  //o r = 12345, significa armazenar um valor padrão na variavel, caso não seja encontrado o atributo
// endereco 
// } = pessoa; // extraindo os atributos rua e numero, para as variaveis rua e numero. e depois extraindo o bjeto endereco normalmente.
// console.log(r);

// const opala = {
//     motor: {
//         cilindros: '6c',
//         tipo: 'v8'
//     },
//     tipo: 'ss',
//     combustivel: 'gasolina',
//     ano: '1992'
// }


// const { motor: montadora, ano: concessionaria = '',  combustivel} = opala;
// console.log(montadora, concessionaria)


