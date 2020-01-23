function soma(x, y){ //x, y são parametros
    const resultado = x + y; //essa variavel só acessada dentro da função
    return resultado;
};
console.log(soma(2, 2)); //2, 2 são argumentos
console.log(soma('Renato', ' Xavier'));




function soma2(x = 1, y = 2) {
    const resultado = x + y;
    return resultado;
};
console.log(soma2());
console.log(soma2(5, 5));




/*const raiz = function (n){ //variavel recebendo já a função
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));*/

const raiz = (n) => {
    return n ** 0.5;
};

/*const raiz = n => n ** 0.5;
console.log(raiz(9));*/