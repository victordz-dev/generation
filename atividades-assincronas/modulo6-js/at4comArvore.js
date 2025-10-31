const read = require('readline-sync');

const p1 = read.question('Digite a primeira categoria: ').toLowerCase();
const p2 = read.question('Digite a segunda categoria: ').toLowerCase();
const p3 = read.question('Digite a terceira categoria: ').toLowerCase();

const arvoreAnimais = {
  vertebrado: {
    ave: {
      carnivoro: 'aguia',
      onivoro: 'pomba'
    },
    mamifero: {
      onivoro: 'homem',
      herbivoro: 'vaca'
    }
  },
  invertebrado: {
    inseto: {
      hematofago: 'pulga',
      herbivoro: 'lagarta'
    },
    anelideo: {
      hematofago: 'sanguessuga',
      onivoro: 'minhoca'
    }
  }
};

const resultado = arvoreAnimais?.[p1]?.[p2]?.[p3] || 'animal desconhecido!';
console.log('\n' + resultado);