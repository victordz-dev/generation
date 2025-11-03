import read = require('readline-sync');

const mySet:Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

const numeroUser:number = read.questionInt('Digite o numero que voce deseja encontrar: ');

if(mySet.has(numeroUser)){
      console.log(`O número ${numeroUser} foi encontrado!`);
}else{
      console.log(`O número ${numeroUser} nao foi foi encontrado!`);
}