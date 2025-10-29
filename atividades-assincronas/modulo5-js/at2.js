const read = require('readline-sync');

const nota1 = read.questionFloat('Digite a primeira nota: ');
const nota2 = read.questionFloat('Digite a segunda nota: ');
const nota3 = read.questionFloat('Digite a terceira nota: ');
const nota4 = read.questionFloat('Digite a quarta nota: ');

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${media.toFixed(1)}`);