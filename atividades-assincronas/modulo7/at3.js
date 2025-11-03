const read = require('readline-sync');

let num = 0;
let menor = 0;
let maior = 0;

while(num >= 0){
      num = read.questionInt('Digite uma idade: ');
      if(num < 21 && num >= 0){
            menor++;
      }
      if(num > 50 && num >= 0){
            maior++;
      }
}

console.log(`Total de pessoas com menos de 21 anos: ${menor}`);
console.log(`Total de pessoas com mais de 50 anos: ${maior}`);