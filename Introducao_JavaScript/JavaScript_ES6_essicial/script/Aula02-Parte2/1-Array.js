const user = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol( 'M' ),
    WOMAN: Symbol( 'W' )
};

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.WOMAN
    },
    {
        name: 'Jennifer',
        age: 18, 
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Intens: ', persons.length);

// verificar se e arraay
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr ) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array
const meas = persons.filter(persons => persons.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

// Retorna um novo
const personsWithCourse = persons.map(persons =>{
    persons.course = 'Introdução ao Javascript';
    return persons;
});

console.log('\nPessoas com a adição do course: ', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age <= persons.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAgers = persons
.filter(persons => persons.age % 2 === 0)
.reduce((age, persons) => {
    age += persons.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalAge);
