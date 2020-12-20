# Orientação a objetos

## Herança
    -> Baseada em protótipos
    -> prototype é uma variável que armazena as definições
    do nosso objeto
    -> __proto__
    -> constructor

'use strict'

const myText = 'Hello prototype';

myText.split('');


A declaração de acima é a mesma dessa

const myText = String('Hello prototype!');
console.log(myText.__proto__.split);

Ele está usando a função construtora string; então, a função 
construtora já carregada um prototype.

Toda função construtora tem um prototype atrelada a ela e toda
vez que eu crio uma variável, a parti da função construtora, eu vou ter essa referencia do proto atrelada a ela.

__proto__ -> prototype -> constructor
Um proto aponta para um prototype, e esse prototype é criado 
apartir de um constructor.

myText.constructor -> String
myText.__proto__ -> String.prototype

function Animal() {}

console.log(Animal.constructor);

f Animal.constructor -> Function -> Function.prototype.
constructor -> Object.prototype = null


O que ocorre ?
1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamad com os argumentos 
especificados e com o `this` vinculado ao novo objeto 
criado.
3- Caso a função construtora tenha uma retorno explicito, 
será respeitado o seu `return`, senão, será retornado o 
objeto criado no passo 1.

    Classes 
        -> ES6
        -> Simplificação da herança de prototipes
        -> palavra chave class

    Modificadores de acesso (Atualmente não existe <br>
    modificadores de acesso no JS)
        -> privado/público
        -> criação de atributos privados com o #
    Encapsulamento
        -. Ocultar detalhe dos funcionamento interno
    Static
        -> Ele permite que agente acesse métodos ou atributos
        sem instanciar determinada classe
