const read = require('readline-sync');

const operacao = read.questionInt('Digite a operação (entre 1 e 3): ');

let saldo = 1000;

switch(operacao){
      case 1:
            console.log('Seu saldo é de: ' + saldo);
            break;
      case 2:
            if(saldo > 0){
                  const valorSacado = read.questionFloat('Qual a quantia deseja retirar? ');
                  if((saldo - valorSacado) < 0){
                        console.log('Saldo insuficiente');
                  }else{
                        saldo = saldo - valorSacado;
                        console.log('Saque realizado com sucesso! Seu novo saldo é de: '+saldo);
                  }
            }
            break;
      case 3:
            const saldoDeposito = read.questionFloat('Qual valor deseja depositar? ');
            saldo = saldo + saldoDeposito;
            console.log('Seu deposito foi concluido! Seu novo saldo é de: ' + saldo);
            break;
      default:
            console.log('Operação invalida!');
            break;
}