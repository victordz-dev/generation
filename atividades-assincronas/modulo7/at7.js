const read = require('readline-sync');

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numero = read.questionInt('Digite um numero que deseja encontrar no vetor: ');

let encontrou;

for(let i = 0; i < vetor.length; i++){
      if(numero === vetor[i]){
            encontrou = i;
      }
}

if(encontrou){
      console.log(`O número 7 está localizado na posição: ${encontrou}`);
}else{
      console.log(`O numero ${numero} não foi encontrado!`);
}