algoritmo "estrutura registro"
// Função : demostração
// Autor : Lucas de Souza Santos
// Data : 02/12/2020
// Seção de Declarações
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
// Seção de Comandos
   escreva("Entre com os nomes, preços e números de páginas de três livros")
   para i de 1 ate 3 faca
        leia(livro[i].nome,  livro[i].preco, livro[i].numero)
   fimpara
   
   escreval("Estes foram registrados")
   para i de 1 ate 3 faca
        escreva(livro[i].nome,  livro[i].preco, livro[i].numero)
   fimpara
fimalgoritmo
