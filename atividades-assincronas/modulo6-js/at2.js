const read = require('readline-sync');


const numero = read.questionInt('Digite um número: ');

if (numero % 2 === 0) {
      console.log(`O número ${numero} é par.`);
}
else {
      console.log(`O número ${numero} é ímpar.`);
}

if (numero >= 0) {
      console.log(`O número ${numero} é positivo.`);
}
else {
      console.log(`O número ${numero} é negativo.`);
}