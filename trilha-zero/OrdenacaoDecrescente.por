programa
{
	funcao inicio()
	{
		inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
		inteiro auxiliar
		escreva("Vetor original: ")
		para(inteiro i = 0; i < 10; i++){
			escreva(vetor[i], " ")
		}
		escreva("\n")
		para(inteiro i = 0; i < 10; i++){
			para(inteiro j = i + 1; j < 10; j++){
				se(vetor[i] < vetor[j]){
					auxiliar = vetor[i]
					vetor[i] = vetor[j]
					vetor[j] = auxiliar
				}
			}
		}
		escreva("Vetor ordenado em ordem decrescente: ")
		para(inteiro i = 0; i < 10; i++){
			escreva(vetor[i], " ")
		}
		escreva("\n")
	}
}