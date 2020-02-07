
// try {
//     //É executada quando não há erros
//     console.log(a);
//     console.log('Abrir um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     } catch (e) {
//     //É executada quando há erros
//     console.log('tratando o erro');
//     } finally {
//     // Sempre que criado é executado sempre
//     console.log('FINALLY Eu Sempre sou executado');

// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando insância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //tratar erro
    //console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}
