const read = require('readline-sync');

const nome = read.question('Digite seu nome: ');
const idade = read.questionInt('Digite sua idade: ');
const doador = read.question('É sua primeira doação? (sim/não): ').toLowerCase();

if (idade >= 18 && idade <= 69){
      if (idade >= 60 && doador === 'sim') {
            console.log(`${nome} não está apto a doar sangue!`);
      } else {
            console.log(`${nome} está apto a doar sangue!`);
      }
} else{
      console.log(`${nome} não está apto a doar sangue!`);
}