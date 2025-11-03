import read = require('readline-sync');

const mySet:Set<number> = new Set<number>;

for(let i:number = 0; i<10;i++){
      let numeroUser:number = read.questionInt(`Digite o ${i+1} numero para entrar no Set (nao aceita repeticao): `);
      mySet.add(numeroUser);
};

for(let numero of mySet){
      console.log(numero);
}