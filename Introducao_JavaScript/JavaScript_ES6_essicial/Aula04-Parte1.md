# Manipulação e iteração de arrays  Parte-1

## criar um array

const arr = [1, 2, 3]
const arr2 = new Array(1, 2, 3);

### Array.of
    cria uma nova instância de array a partir do número de 
parâmetro informados

### Array
    Cria uma nova instância de array de acordo com os 
parâmetros informados.

obs.: se for passado um elemento, o vetor é criado com a 
quantidade de posições do elemento.

### Array.from
    Cria uma nova instância de array a partir de um parâmetro
array-like ou iterable object

#### Array-like
    O comando abaixo não é um array e sim um node list. Então 
não vou ter funções de array, como: pop, forEach e etc...
    const divs = document.querySelectorAll('div');
    
    Se eu quiser ultilizar o node list, é só usar o comando 
abaixo, que ele vai me dar um array.
    const arr = Array.from(divs)

## Inserir e remover elementos
### push
    Adiciona um ou mais elementos no final do array e retorna
o tamanho do novo array.

### pop
    Remove o ultimo item
### unshift 
    Adicionar um ou mais elementos no início do array e 
retorna o tamanho do novo array
### shift 
    Remove o primeiro elemento de um array e retorna o 
elemento que ele removeu
### concat 
    Concatena um ou mais array e retonrnando um novo array.
### slice
    Retorna um novo array "fatiando" o array de acordo com 
ínicio e fim.
### splice
    Altera um array adicionando novos elementos enquanto 
remove elementos antigos


