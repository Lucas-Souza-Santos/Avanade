// Criação de um array
const arr1 = [1, 2, 3]
const arr2 = new Array(1, 2, 4);
const arr3 = Array.of(1, 2, 5);

console.log(`Array1 = (${arr1}) Array2 = (${arr2}) Array3 = (${arr3})`)

const arr4 = Array(3);

const arr5 = Array(3, 2);

const divs = document.querySelectorAll('div');

const arr = Array.from(divs);

const cafaDaManha = ['Frutas', 'cafe puro', 'pão', 'mateiga'];
const almoco = ['feijão', 'arroz', 'carne'];

const refeicoes1 = cafaDaManha.concat(almoco);
const refeicoes2 = almoco.concat(cafaDaManha);
