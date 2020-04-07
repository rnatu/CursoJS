

// const btnTarefa = document.querySelector('.btn-tarefa'); //selecionando elemento no html
// btnTarefa.addEventListener('click', function(event) { //capturando o evento de 'click'

// })

/*sempre usar rest operator ...exemplo 
para enviar parametros indefinidos para uma função*/



// * CTRL + SHIFT + L = Seleção múltiplas

// * CTRL + SHIFT + P

const n = [0,1,2,3,4,5,6];

//remove o primeiro item
const shift = n.shift();
// ou só n.shift(); se não precisar retornar o item removido
console.log(shift);

//insere um primeiro item
n.unshift('primeiro item');
console.log(n);

//remove o ultimo item
const pop = n.pop();
// ou só n.pop(); se não precisar retornar o item removido
console.log(pop);

//insere um ultimo item
n.push('ultimo item');
console.log(n);


//conventerndo para boolean
const nome = 'Renato Xavier';
console.log(Boolean(nome));
console.log(nome);