const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        // * filtrando se no caminho contem .git, e se for voltar pra o inicio do laço utilizando o continue, para não exibir no console.log final
        if (/node_modules/g.test(fileFullPath)) continue;
        // * filtrando se no caminho contem node_modules, e se for voltar pra o inicio do laço utilizando o continue, para não exibir no console.log final

        
        
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
            // * O continue retorna para a proxima iteração do laço
        }
        
        if (!/\.html/g.test(fileFullPath)) continue;
        // * filtrando se no caminho contem .html, e se não for voltar pra o inicio do laço utilizando o continue, para não exibir no console.log final
        

        console.log(fileFullPath);
    }
}

readdir('/Users/rNaTu/Documents/GitHub/CursoJS/');
