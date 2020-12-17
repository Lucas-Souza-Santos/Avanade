// Estrutura de repetição

// for

const array = [1, 2, 3];
for (let index = 0; index < array.length; index++){
    console.log(array[index]);
}

// while
var n = 0;
var x = 0;
while (n < 3){
    n++;
    x += n;
}

console.log(x);
// do - while
let i = 0;
do{
    i += 1;
    console.log(i);
}while(i < 5);

// for in
for(let i in array){
    console.log(i);
}
// for of
for(let i of array){
    console.log(i);
}

