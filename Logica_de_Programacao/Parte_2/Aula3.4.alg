algoritmo "desvio condional - if aninhado"
// Fun��o : caso
// Autor : Lucas de Souza Santos
// Data : 28/11/2020
// Se��o de Declara��es
var
   opcao: inteiro
inicio
// Se��o de Comandos
   opcao <- 0

   escreval("1 - Abrir Netflix")
   escreval("2 - Abrir Amazon Prime")
   escreval("3 - Abrir HBO GO")
   escreval("4 - Sair")

   escreva("Informe a opcao: ")
   leia(opcao)

   escolha(opcao)
                 caso 1
                      escreva("Abrindo netflix")
                 caso 2
                      escreva("Abrindo Amazon Prime")
                 caso 3
                      escreva("Abrindo HBO GO")
                 caso 4
                      escreva("Saindo")

   fimescolha

fimalgoritmo
