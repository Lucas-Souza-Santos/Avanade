algoritmo "estrutura registro"
// Fun��o : demostra��o
// Autor : Lucas de Souza Santos
// Data : 02/12/2020
// Se��o de Declara��es
tipo
    estrutura_livro = registro
        nome: caracter
        preco: real
        pagina: inteiro
    fimregistro
var
   i: inteiro
   livro array[1..3] de estrutura_livro
inicio
// Se��o de Comandos
   escreva("Entre com os nomes, pre�os e n�meros de p�ginas de tr�s livros")
   para i de 1 ate 3 faca
        leia(livro[i].nome,  livro[i].preco, livro[i].numero)
   fimpara
   
   escreval("Estes foram registrados")
   para i de 1 ate 3 faca
        escreva(livro[i].nome,  livro[i].preco, livro[i].numero)
   fimpara
fimalgoritmo
