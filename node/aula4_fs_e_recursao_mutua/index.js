const fs = require('fs').promises;
const path = require('path');
// console.log(__filename);

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

async function walk(files) {
    for(let file of files){
        const stats = await fs.stat();
        console.log(file);
    }
}

readdir('/Users/rNaTu/Documents/GitHub/CursoJS/')


// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))
