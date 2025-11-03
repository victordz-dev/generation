const read = require('readline-sync');

let media = 0;
let numero = 0;
let contador = 0;

do{
      numero = read.questionInt('Digite um número (0 para sair): ');
      if(numero % 3 === 0 && numero !== 0){
            media += numero;
            contador++;
      }

}while(numero !== 0);

console.log(`A media de todos os números multiplos de 3 é: ${media / contador}`);