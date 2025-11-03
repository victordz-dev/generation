import read = require('readline-sync');

const cores: Array<String> = new Array<String>;

for(let i:number = 0; i < 5; i++){
      const corUser = read.question(`Digite a ${i+1} cor: `);
      cores.push(corUser);
}

console.log(`Listar todas as cores:
${cores}
Ordenar as cores:
${cores.sort()}
`);
