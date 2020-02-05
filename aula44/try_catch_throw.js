
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}

try {
    console.log(soma(1, 1));
    console.log(soma(1, 'b0'));
    
} catch (error) {
    // console.log(error);
    console.log('Alguma coisa mais amigavel pro usuário.');
    
}


