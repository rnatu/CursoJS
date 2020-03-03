// defineProperty -> defineProperties
function Produto(nome, preco, estoque) {

    
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostrar a chave 
            value: nome, // valor
            writable: true, // alterar o valor
            configurable: true, // reconfigurar ou apagar
        },
        preco: {
            enumerable: true, // mostrar a chave 
            value: preco, // valor
            writable: true, // alterar o valor
            configurable: true, // reconfigurar ou apagar
        },
    })


    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostrar a chave 
        value: estoque, // valor
        writable: false, // alterar o valor
        configurable: false, // reconfigurar ou apagar
    });
}


const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
console.log(p1);

console.log(Object.keys(p1));
