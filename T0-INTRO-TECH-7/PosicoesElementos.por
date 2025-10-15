programa {
    funcao inicio(){
        inteiro vetor[10], i, soma = 0
        real media
        escreva("Digite 10 números inteiros:\n")
        para (i = 0; i < 10; i++){
            leia(vetor[i])
            soma = soma + vetor[i]
        }
        escreva("\nElementos nos índices ímpares:\n")
        para (i = 0; i < 10; i++){
            se (i % 2 != 0){
                escreva(vetor[i], " ")
            }
        }

        escreva("\n\nElementos pares:\n")
        para (i = 0; i < 10; i++){
            se (vetor[i] % 2 == 0){
                escreva(vetor[i], " ")
            }
        }
        media = soma / 10
        escreva("\n\nSoma: ", soma)
        escreva("\nMédia: ", media)
    }
}
