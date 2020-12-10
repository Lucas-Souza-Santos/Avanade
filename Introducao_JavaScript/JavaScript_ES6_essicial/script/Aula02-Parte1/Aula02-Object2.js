const user = {
    name: 'Lucas',
    lastName: 'de Souza Santos'
};

// Recupera as chaves do objeto
console.log('Propriedade do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto 
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Margear propriedades de objetos
Object.assign(user, {fullName: 'Lucas de Souza Santos'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
// Pensando em imutabilidade o comando de cima não é recomendado

/**
 * Não é recomendado alterar o objeto ou array principal, a ideia é que seja gerado um novo.
 * Toda vez que formo mergiar um array ou objeto é passar o primeiro parâmetro um objeto ou array
 * vázio, ai assim faz o margi. mergi é o comando acima e abaixo está a maneira recomendada,
 * que foi descrita nesse texto.
 */
console.log('\nRetorna um novo objeto margeando dois ou mais objetos', Object.assign({}, user, {age: 28}));

/**
 * Quando é criado um objeto const, agente não consegui mudar o local 
 * para aonde ele está apontando; mas suas propriedades podem ser trocadas.
 * 
 */
// Previne todas as alterações em um objeto
const newObj = {fod: 'bar'};
Object.freeze(newObj);
/**
 * Com o comando .freeze não deixa ou não é possivel trocar as
 *  propriedades do objeto e nem o objeto
 */

newObj.fod = 'changes';
delete newObj.fod;

const person= {name: 'Lucas Santos'};
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações ', person);

/**
 * metodo seal
 * Não permite que vc ou delete nenhuma propriedade do objeto
 * É possivel trocar o valor de uma propriedade que já existe 
 * dentro dele.
 */



