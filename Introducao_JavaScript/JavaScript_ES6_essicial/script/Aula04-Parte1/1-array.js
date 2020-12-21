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

arr1.push(4, 5);

// forEach
arr1.forEach((value, index) => {
    console.log(`${index + 1}º = ${value}`);
});

// map
console.log(arr1.map(value => value * 2));

console.log(arr1);

// flat
const novo_array = [56, 78, [34, 57], [90, 98, 100]];
console.log(novo_array);
console.log(novo_array.flat());

// flatMap
console.log(novo_array.flatMap(value => [value * 2]));

// keys
const arrIterator = arr1.keys();

console.log("Keys: ")
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

// values 
const arrInterator2 = arr1.values();

console.log("valores: ");
console.log(arrInterator2.next());
console.log(arrInterator2.next());
console.log(arrInterator2.next());
console.log(arrInterator2.next());
console.log(arrInterator2.next());
console.log(arrInterator2.next());

// entries
const arrInterator3 = arr1.entries();

console.log("Entries: ");

console.log(arrInterator3.next());
console.log(arrInterator3.next());
console.log(arrInterator3.next());
console.log(arrInterator3.next());
console.log(arrInterator3.next());
console.log(arrInterator3.next());

// find
const firstGreaterThanTwo = arr1.find(value => value > 2);

console.log("Find: ");

console.log(firstGreaterThanTwo);

// findIndex
const firstIndexGreaterThanTwo = arr1.findIndex(value => value > 2);

console.log("Index: ");
console.log(firstIndexGreaterThanTwo + 1);

// filter
const allValuesGreaterThanTwo = arr1.filter(value => value % 2 === 0);

console.log("Retorna Array sobre um condição: ");
console.log(allValuesGreaterThanTwo)

// indexOf
const firstIndexOfItem = arr1.indexOf(3);

console.log("IndexOf: ");
console.log(firstIndexOfItem);

// lastIndexOf

const lastIndexOfItem = arr1.lastIndexOf(3);

console.log("lastIndexOf: ");
console.log(lastIndexOfItem);

// includes
const hasItemOne = arr1.includes(1);
const hasItem1000 = arr1.includes(1000);

console.log("includes: ");
console.log(hasItemOne);
console.log(hasItem1000);

// some
const hasSomeEvenNumber = arr1.some(v => v % 2 === 0)

console.log("some: ");
console.log(hasSomeEvenNumber);

// every
const allEvenNumbers = arr1.every(value => value % 2 === 0);

console.log("every: ");
console.log(allEvenNumbers);

// sort

const sortValues = arr1.sort();

console.log("Sort: ");
console.log(sortValues);

// reverse
const reverteValues = arr1.reverse();

console.log("reverte: ");
console.log(arr1);

// join
const joinValue = arr1.join('-');

console.log("join: ");
console.log(joinValue);

// reduce 
const reduceValue = arr1.reduce((total, value) => total += value, 0);

console.log("reduce: ");
console.log(reduceValue);
