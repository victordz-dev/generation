const read = require('readline-sync');

const n1 = read.questionFloat('Digite o primeiro número: ');
const n2 = read.questionFloat('Digite o segundo número: ');
const n3 = read.questionFloat('Digite o terceiro número: ');
const n4 = read.questionFloat('Digite o quarto número: ');

const calculo = (n1 * n2) - (n3 * n4);

console.log(`Resultado do cálculo: ${calculo.toFixed(1)}`);