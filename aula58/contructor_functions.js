// Função construtora -> constrói objetos
// Função fabria -> fabrica objetos

// fabrica -> criaPessoa
// construtora -> Pessoa (new), (sempre iniciar com letra maiúscula).
// constructor não utiliza virgulas



function Pessoa(nome, sobrenome) {
    
    // Privadas - Atributos ou métodos Privados - Não vão estar disponivel fora do corpo do objeto
    const id = 123456;

    const metodoInterno = () => {

    };



    // Publicos - Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    //não precisa do return

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p1.metodo();