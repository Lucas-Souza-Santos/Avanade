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
   
   se (opcao = 1) entao
      escreva("Ok, Abrindo netflix")
   senao
      se (opcao = 2) entao
         escreva("OK, Abrindo Amazon Prime")
      senao
         se (opcao = 3) entao
            escreva("OK, Abrindo HBO GO")
         senao
            se (opcao = 4) entao
               escreva("OK, Saindo")
            senao
               escreva("Op��o Invalida")
            fimse
         fimse
      fimse
   fimse
fimalgoritmo
