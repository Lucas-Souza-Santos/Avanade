const myText = 'Hello prototype';

//const myText = String('Hello prototype');

// console.log(myText.__proto__.split)

// console.log(String.prototype.split);

console.log("O __proto__ aponta para o prototype de string");
console.log(myText.__proto__.split === String.prototype.split);

console.log("O constructor de myText é String");

console.log(myText.constructor === String);

console.log("Animal.constructor -> String");
console.log("myText.__proto__ -> String.prototype");

// console.log(cachorro.qtdePatas);

function Pessoa(name){
    this.name = name;

    return {
        name: 'Text'
    };
}

const p = new Pessoa('Lucas');

console.log(p);

function Animal(){
    // this.qtdePatas = 4;
    Animal.prototype.qtdePatas = 0;
    Animal.prototype.movimentar = function() {
        console.log("corre");
    }
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log("Au Au Au");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


