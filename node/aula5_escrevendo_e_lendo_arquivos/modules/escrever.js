const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf-8' });
}
// * flag: 'w'  apaga tudo que estiver dentro do arquivo caso ele já existe;
// * flag: 'a'  cria uma nova frase;
// * o /n é para a quebra de linha



