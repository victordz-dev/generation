const read = require('readline-sync');

const notas = [];

for(let i = 0; i < 10; i++){
      let aluno = [];
      for(let j = 0; j < 4; j++){
            let nota = read.questionFloat(`Digite a nota do ${i+1} aluno no ${j+1} bimestre: `);
            aluno.push(nota);
      };
      console.log('------------------------------------');
      notas.push(aluno);
};

const mediaAlunos = [];

for(let i = 0; i < notas.length; i++){
      let media = 0;
      cont = 0;
      for(let j = 0; j < notas[i].length; j++){
            media += notas[i][j];
            cont++
      };
      mediaAlunos.push((media/cont).toFixed(1));
}

console.log(mediaAlunos);