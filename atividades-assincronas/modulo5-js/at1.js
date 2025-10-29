const read = require('readline-sync');

const salario = read.questionFloat('Digite o salário: ');

const abono = read.questionFloat('Digite o abono: ');

const novoSalario = salario + abono;

console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);