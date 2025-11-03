const read = require('readline-sync');

const n1 = read.questionInt('digite o primeiro numero do intevalo: ');
const n2 = read.questionInt('digite o ultimo numero do intervalo: ');

if(n1>n2){
      console.log('intervalo invalido!');
      process.exit(1);
}

for(let i = n1; i <= n2; i++){
      if(i % 3 == 0 && i % 5 == 0 && i != 0){
            console.log(`${i} é multiplo de 3 e 5!`);
      }
}