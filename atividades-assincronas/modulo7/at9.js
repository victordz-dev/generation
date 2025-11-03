const matriz = [
      [1,1,1],
      [2,2,2],
      [3,3,3]
]

const principal = [];
const secundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for(let i = 0; i < matriz.length; i++){
      let valor = matriz[i][i];
      principal.push(valor);
      somaPrincipal += valor; 
      valor = matriz[i][(matriz.length-1) -i];
      secundaria.push(valor);
      somaSecundaria += valor;
};

console.log(`Elementos da Diagonal Principal:
${principal}
Elementos da Diagonal Secundária:
${secundaria}
Soma dos Elementos da Diagonal Principal:
${somaPrincipal}
Soma dos Elementos da Diagonal Secundária:
${somaSecundaria}
`);