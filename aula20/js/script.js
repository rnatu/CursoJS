function meuEscopo() {

    
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    form.addEventListener('submit', recebeEventoForm);

    function recebeEventoForm (evento) {

        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');


        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
        
        
        
    };


    

    

};
meuEscopo();