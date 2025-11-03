const read = require('readline-sync');

let devBackend = 0;
let mulherFrontend = 0;
let homemMobileMais40 = 0;
let naoBiFullstackMenos30 = 0;
let total = 0;
let mediaIdade = 0;

let continuar = true;

while(continuar == true){

      let idade = read.questionInt('Digite sua idade: ');

      if(idade < 0){
            console.log('Idade inválida. Tente novamente.');
            continue;
      }

      let genero = read.questionInt(`Digite o código da sua identidade de gênero: 
      1 - Mulher Cis
      2 - Homem Cis
      3 - Não Binário
      4 - Mulher Trans
      5 - Homem Trans
      6 - Outros
      `);

      if(genero < 1 || genero > 6){
            console.log('Gênero inválido. Tente novamente.');
            continue;
      }

      let cargo = read.questionInt(`Digite o código do seu cargo: 
      1 - Backend
      2 - Frontend
      3 - Mobile
      4 - Fullstack
      `);

      if(cargo < 1 || cargo > 4){
            console.log('Cargo inválido. Tente novamente.');
            continue;
      }

      if(cargo == 1){
            devBackend++;
      }
      if((genero == 1 || genero == 4) && cargo == 2){
            mulherFrontend++;
      }
      if((genero == 2 || genero == 5) && cargo == 3 && idade > 40){
            homemMobileMais40++;
      }
      if((genero == 3 || genero == 6) && cargo == 4 && idade < 30){
            naoBiFullstackMenos30++;
      }
      total++;
      mediaIdade += idade;
      continuar = read.keyInYNStrict('Deseja continuar?');
}

console.log(`Total de desenvolvedores Backend: ${devBackend}`);
console.log(`Total de mulheres cis ou trans desenvolvedoras Frontend: ${mulherFrontend}`);
console.log(`Total de homens cis ou trans desenvolvedores Mobile com mais de 40 anos: ${homemMobileMais40}`);
console.log(`Total de não binários ou outros desenvolvedores Fullstack com menos de 30 anos: ${naoBiFullstackMenos30}`);
console.log(`Total de desenvolvedores: ${total}`);
console.log(`Média de idade dos desenvolvedores: ${mediaIdade / total}`);