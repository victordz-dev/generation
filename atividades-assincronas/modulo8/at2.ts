import read = require('readline-sync');

const myArr: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

const numeroUser = read.questionInt('Digite o numero que deseja encontrar: ');

const indexUser:number = myArr.indexOf(numeroUser);

if(indexUser === -1){
      console.log(`O número ${numeroUser} não foi encontrado!`)
}else{
      console.log(`O número ${numeroUser} está localizado na posição: ${indexUser}`);
};
