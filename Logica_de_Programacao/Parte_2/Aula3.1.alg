algoritmo "Desvio condicional e boas práticas de programação"
// Função : Desvio condicional
// Autor : Lucas de Souza Santos
// Data : 28/11/2020
// Seção de Declarações 
var
   nota1, nota2, nota3, nota4, media: real
   nome: caractere
inicio
// Seção de Comandos
   escreva("Nome do Aluno: ")
   leia(nome)
   escreval("Informe as notas do Aluno, ", nome, "!")
   escreva("nota 1: ")
   leia(nota1)
   escreva("nota 2: ")
   leia(nota2)
   escreva("nota 3: ")
   leia(nota3)
   escreva("nota 4: ")
   leia(nota4)
   
   // calculo da média
   media <- (nota1 + nota2 + nota3 + nota4) / 4
   
   // teste condicional para ver se o aluno foi aprovado

   se (media >= 7) entao
     escreva("Aluno Aprovado")
   fimse

fimalgoritmo
