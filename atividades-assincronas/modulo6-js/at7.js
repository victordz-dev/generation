const read = require('readline-sync');

const n1 = read.questionFloat('Digite o primeiro numero: ');
const n2 = read.questionFloat('Digite o segundo numero: ');
const operacao = read.questionInt('Digite o numero da operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão');

let total;

switch(operacao){
      case 1:
            total = n1+n2;
      case 2:
            total = n1-n2;
      case 3:
            total = n1*n2;
      case 4:
            total = n1/n2;
      default:
            total = 0
}

if(total){
      console.log(`${n1.toFixed(2)} + ${n2.toFixed(2)} = ${total.toFixed(2)}`)
} else{
      console.log('Comando invalido')
}