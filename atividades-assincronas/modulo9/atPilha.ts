//importações
import * as read from 'readline-sync';
import { Stack } from "./pilha";

//variaveis globais
const myStack = new Stack<string>();

let pass:boolean = true;

const sep = () => console.log('------------------------------------------------------');

const pause = () => {
      sep();
      read.question('Digite qualquer coisa para continuar: ');
};

const clear = () => console.clear();

const isEmpty = () => {
      if(myStack.isEmpty()){
            console.log('A pilha esta vazia!\n');
            pause();
            return true;
      };
}


while(pass){

      clear();
      console.log('********************* livros gen *********************');
      sep();
      console.log(`                        Menu

      Livros na pilha atualmente: ${myStack.count()}

      1 - Adicionar livro na pilha
      2 - Listar todos os livros da pilha
      3 - Retirar um livro da pilha
      4 - Procurar um livro na pilha
      5 - Limpar a pilha
      0 - Sair

      \n`);
      sep();
      const escolha:string = read.question('O que deseja fazer?: ');
      clear();

      switch(escolha){

            case '1':
                  let nomeLivro: string;
                  do{
                        console.log('            Adicionar livro na pilha\n');
                        nomeLivro = read.question('Digite o nome do livro (ou "c" para cancelar): ').toLowerCase();

                        if(nomeLivro && nomeLivro !== 'c') {
                              myStack.push(nomeLivro);
                              console.log(`\nLivro ${nomeLivro} adicionado!\n`);
                              pause();
                              clear();
                        }
                        if(nomeLivro == ''){
                              console.log('\nNome Invalido!');
                              pause();
                              clear();
                        };

                  }while (nomeLivro !== 'c');
                  break;

            case '2':
                  console.log('            Mostrar livros na pilha\n');

                  if(isEmpty()){break;};

                  console.log('Lista de livros na pilha atualmente:\n');
                  myStack.printStack();
                  pause();
                  break;

            case '3':
                  console.log('            Retirar livro da pilha\n');

                  if(isEmpty()){break;};

                  const retirar:boolean = read.keyInYNStrict(`Proximo livro na pilha: ${myStack.peek()}, deseja retira-lo?: `);

                  if(!retirar){break;};

                  console.log(`O livro ${myStack.pop()} foi retirado!\n`);

                  if(isEmpty()){break;};

                  console.log('livros na pilha: \n');
                  myStack.printStack();
                  pause();
                  break;

            case '4':
                  console.log('            Procurar livro na pilha\n');

                  if(isEmpty()){break;};

                  const findLivro:string = read.question('Digite o nome do Livro que deseja encontrar na pilha ou "c" para cancelar: ').toLowerCase();

                  if(findLivro == 'c'){break;};

                  if(!(myStack.contains(findLivro))){
                        console.log(`\n${findLivro} não esta na pilha!\n`);
                        pause();
                        break;
                  };

                  console.log(`\n${findLivro} está na pilha!\n`);
                  pause();
                  break;

            case '5':
                  console.log('            Limpar pilha\n');

                  if(isEmpty()){break;};

                  const limpar:boolean = read.keyInYNStrict('Voce realmente deseja apagar a pilha?');

                  if(!limpar){
                        console.log('\nOperação cancelada!\n');
                        pause();
                        break;
                  }

                  myStack.clear();
                  console.log('\nA pilha foi apagada com sucesso!\n');
                  pause();
                  break;

            case '0':
                  clear()
                  console.log('Programa Finalizado!');
                  pass = false;
                  break;

            default:
                  clear()
                  console.log('Operação Inválida!\n');
                  pause();
                  break;
      };
};