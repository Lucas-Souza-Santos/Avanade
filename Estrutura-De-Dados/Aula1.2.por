programa
{
	
	funcao inicio()
	{
		inteiro numeros[] = {1, 2, 3, 4, 5, 6, 7, 8, 9}
		inteiro numero
		logico achou = falso

		escreva("Qual número você deseja encontrar: \n")
		leia(numero)

		para(inteiro posicao = 0; posicao < 9; posicao++){
			se(numeros[posicao] == numero){
				achou = verdadeiro
				escreva("Numero encontrado na posicao ", ++posicao, "\n")
			}
		}

		se (nao achou){
			escreva("O número não foi achado")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 434; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */