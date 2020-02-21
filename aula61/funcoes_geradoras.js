console.log('exemplo 1');
function* geradora1() {
    // código qualquer ...
    yield 'Valor 1';
    // código qualquer ...
    yield 'Valor 2';
    // código qualquer ...
    yield 'Valor 3';

    /*yield diferente do return não finaliza a função no momento em que é executada
    serve como uma especie de pause na função */
}

const g1 = geradora1();

for (let valor of g1) {
    console.log(valor);
}
// console.log(g1.next());
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

console.log('');



console.log('exemplo 2');
function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
};

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log('');



console.log('exemplo 3');
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}


console.log('exemplo 4');
function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    // ...

    yield function() {
        console.log('vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();