function temHabilidade(skills) {
    if (skills.indexOf("Javascript") !== -1) {
        return console.log("Tem a skill");
      } else {
        console.log("Não tem a skill");
      }
    };
   var skills = ["Javascript", "ReactJS", "React Native"];
   
   temHabilidade(skills); // true ou false

   console.log(skills[0])


//            0123456789
//const nome = 'Aline Lima';
//console.log(nome[0]);




//                0        1        2      
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos instanceof Array); //Detectar se é uma array - Retorna true

alunos.push('Felipe', 'Leonardo'); // Adiciona no fim do array

alunos.unshift('Renato'); // Adiciona no começo do array



console.log(alunos);

const removidoFinal = alunos.pop();  // Remove do fim do array
console.log(removidoFinal);

const removidoInicio = alunos.shift(); //Remove do inicio
console.log(removidoInicio);

console.log(alunos);

console.log(alunos.slice(0,3)); //Fatiar de 0 até 3 exibindo 0,1,2
//ou
console.log(alunos.slice(0, -1)); //Fatiar tamanho total do array, menos 1 index


// Altera se ja existe ou adiciona pelo index
//alunos[0] = 'Eduardo';
//alunos[3] = 'Luiza';

console.log(alunos.length)
console.log(alunos[0]);