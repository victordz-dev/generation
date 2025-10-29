const read = require('readline-sync');

const salarioBruto = read.questionFloat('Digite o salário bruto: ');
const adicionalNoturno = read.questionFloat('Digite o adicional noturno: ');
const horasExtras = read.questionFloat('Digite as horas extras trabalhadas: ');
const descontos = read.questionFloat('Digite o total de descontos: ');

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);