const read = require('readline-sync');

const numeros = [];

for(let i = 0; i<10; i++){
      let numero = read.questionInt(`Digite o valor do ${i+1} numero: `);
      numeros.push(numero);
}

const indexImpar = [];
const numerosPares = [];
let media = 0;
let contador = 0;

for(contador; contador < numeros.length; contador++){
      if(!(contador % 2 === 0)){
            indexImpar.push(numeros[contador]);
      }
      if(numeros[contador] % 2 === 0){
            numerosPares.push(numeros[contador]);
      }
      media += numeros[contador];
}

console.log(`Elementos nos índices ímpares: 
${indexImpar}
Elementos Pares: 
${numerosPares}
Soma: ${media}
Media: ${(media/contador).toFixed(2)}`)