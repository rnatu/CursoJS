const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
//console.log(caminhoArquivo);

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');


// * ESCREVENDO
const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
];

// * Convertendo o objeto para json
const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);



// * LENDO
async function leArquivo (caminho) {
  const dados = await ler(caminho)
  renderizaDados(dados);  
}

function renderizaDados(dados) {
    // console.log(dados);
    // * Convertendo JSON para javascript
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
};

leArquivo(caminhoArquivo)
