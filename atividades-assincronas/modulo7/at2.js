const read = require('readline-sync');

let par = 0;
let impar = 0;

for(let i = 0; i < 10; i++){
      let number = read.questionInt(`digite o ${i+1}° número inteiro: `)
      if(number % 2 == 0){
            par += 1;
      } else{
            impar += 1;
      }
}

console.log(`Total de números pares: ${par}\nTotal de números impares: ${impar}`)