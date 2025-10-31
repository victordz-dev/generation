const read = require('readline-sync');

const codigo = read.questionInt('digite codigo do produto de 1 a 6: ');
const quantidade = read.questionInt('digite a quantidade: ');


let nome, valor;

switch(codigo){
      case 1:
            nome = 'cachorro quente';
            valor = 10.0;
            break;
      case 2:
            nome = 'x-salada';
            valor = 15.0;
            break;
      case 3:
            nome = 'x-bacon';
            valor = 18.0;
            break;
      case 4:
            nome = 'bauru';
            valor = 12.0;
            break;
      case 5:
            nome = 'refrigerante';
            valor = 8.0;
      case 6:
            nome = 'suco de laranja';
            valor = 13.0;
      default:
            nome = 0;
            valor = 0;
}

let valorTotal = valor*quantidade;

if(nome&&valor){
      console.log(`Produto: ${nome}\nValor total: R$ ${valorTotal.toFixed(2)}`);
} else{
      console.log('produto invalido');
}