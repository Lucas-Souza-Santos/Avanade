const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = symbol2('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrini da Silva'
};

console.log(user);

// Symbols criam propriedade que não são enumnberables
for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}

// Acessando todas as propriedades do objeto 
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP      : Symbol(   'UP'    ),
    DOWN    : Symbol(   'DOWN'  ),
    LEFT    : Symbol(   'LEFT'  ),
    RIGHT   : Symbol(   'RIGHT' )
};
