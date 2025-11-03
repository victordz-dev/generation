const read = require('readline-sync');

let soma = 0;
let numero = 0;

do{
      numero = read.questionInt('Digite um número (0 para sair): ');
      if(numero > 0){
            soma += numero;
      }

}while(numero !== 0);

console.log(`A soma dos números digitados é: ${soma}`);