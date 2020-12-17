const array = [0, 1, 2, 3, 4, 5];


array.forEach( item => {
    if(item % 2 === 0){
    console.log(`O número ${item} é par.`);
    }else{
        console.log(`O número ${item} é impar`);
    }
});


array.forEach(item => {
    if(item % 2 == 0){
        console.log("Dividido por 2");
    }else if(item % 3 === 0){
        console.log("Dividido por 3");
    }else{
        console.log("Dividido por outro número");
    }
})

// switch - case

const fruit = 'banana';

switch(fruit){
    case 'banana':
        console.log("R$ 3,00/ Kg");
        break;
    case  'goiaba':
        console.log("R$ 4,00/ Kg");
        break;
    default:
        console.log("Não tem sua fruta.");
}

