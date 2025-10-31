const read = require('readline-sync');

const valor1 = read.questionInt('Digite o primeiro valor: ');
const valor2 = read.questionInt('Digite o segundo valor: ');
const valor3 = read.questionInt('Digite o terceiro valor: ');

const soma = valor1 + valor2

if (soma > valor3) {
      console.log(`A soma de ${valor1} + ${valor2} é maior que ${valor3}`);
}
else if (soma < valor3) {
      console.log(`A soma de ${valor1} + ${valor2} é menor que ${valor3}`);
}
else{
      console.log(`A soma de ${valor1} + ${valor2} é igual a ${valor3}`);
}