const read = require('readline-sync');

const nome = read.question('Digite o nome do colaborador: ');
const codCargo = read.questionInt('Digite o código do colaborador entre 1 e 6: ');
const salario = read.questionFloat('Digite o salario: ');

let nomeCargo, percentual;

switch(codCargo){
      case 1:
            nomeCargo = 'gerente';
            percentual = 10;
            break;
      case 2:
            nomeCargo = 'vendedor';
            percentual = 7;
            break;
      case 3:
            nomeCargo = 'supervisor';
            percentual = 9;
            break;
      case 4:
            nomeCargo = 'motorista';
            percentual = 6;
            break;
      case 5:
            nomeCargo = 'estoquista';
            percentual = 5;
            break;
      case 6:
            nomeCargo = 'tecnico de TI';
            percentual = 8;
            break;
      default:
            nomeCargo = 0;
            percentual = 0;
}

const novoSalario = salario + (percentual*salario/100);

if(nomeCargo && percentual){
      console.log(`Nome do colaborador: ${nome}\nCargo: ${nomeCargo}\nSalário: ${novoSalario.toFixed(2)}`);
} else{
      console.log('Comando invalido!')
}