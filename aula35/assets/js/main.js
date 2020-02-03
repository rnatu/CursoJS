
const container = document.querySelector('.container');
const div = document.createElement('div'); //criação de um elemento html armazenando em uma variavel
container.appendChild(div); //referenia aonde o elemento deve ser criado -> pai.appendchiel(filho)

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];

    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);

    criaTag.appendChild(criaTexto);

    div.appendChild(criaTag);
}

