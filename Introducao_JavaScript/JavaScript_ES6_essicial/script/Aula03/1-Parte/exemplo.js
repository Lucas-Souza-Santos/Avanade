'use strict';

console.log(String.prototype.split);

const myText = String('Hello prototype!');


console.log(myText.__proto__.split);


console.log(myText.__proto__.split === String.prototype.split);


new Foo()

class Animal{
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
    
}

