const read = require('readline-sync');

const palavra1 = read.question('Digite a primeira palavra: ').toLowerCase();
const palavra2 = read.question('Digite a segunda palavra: ').toLowerCase();
const palavra3 = read.question('Digite a terceira palavra: ').toLowerCase();

const desconhecido = 'animal desconhecido!';

if(palavra1 === 'vertebrado'){
      if(palavra2 === 'ave'){
            if(palavra3 === 'carnivoro'){
                  console.log('aguia');
            }
            else if(palavra3 === 'onivoro'){
                  console.log('pomba');
            } else{
                  console.log(desconhecido);
            }
      }
      else if(palavra2 === 'mamifero'){
            if(palavra3 === 'onivoro'){
                  console.log('homem');
            }
            else if(palavra3 === 'herbivoro'){
                  console.log('vaca');
            } else{
                  console.log(desconhecido);
            }
      } else{
            console.log('animal desconhecido!')
      }
}
else if(palavra1 === 'invertebrado'){
      if(palavra2 === 'inseto'){
            if(palavra3 === 'hematofago'){
                  console.log('pulga');
            }
            else if(palavra3 === 'herbivoro'){
                  console.log('lagarta');
            } else{
                  console.log(desconhecido);
            }
      }
      else if(palavra2 === 'anelideo'){
            if(palavra3 === 'hematofago'){
                  console.log('sanguessuga');
            }
            else if(palavra3 === 'onivoro'){
                  console.log('minhoca');
            } else{
                  console.log(desconhecido);
            }
      }
} else{
      console.log(desconhecido);
}