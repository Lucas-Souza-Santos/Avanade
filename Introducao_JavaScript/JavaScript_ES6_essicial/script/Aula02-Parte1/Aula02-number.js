const myNumber = 12.4032;

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em String: ', typeof(numberAsString));

// Retorna número com um número de casas decimais 
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

// transfoma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.20'));

// Transforma uma string em int
console.log('\nString passado para int: ', parseInt('15'));



