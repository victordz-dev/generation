//importações
import * as read from 'readline-sync';
import { Queue } from "./fila";

//variaveis globais
const myQueue = new Queue<string>();

let pass:boolean = true;

const sep = () => console.log('-----------------------------------------------------');

const pause = () => {
      sep();
      read.question('Digite qualquer coisa para continuar: ');
};

const clear = () => console.clear();

const isEmpty = () => {
      if(myQueue.isEmpty()){
            console.log('A fila esta vazia!\n');
            pause();
            return true;
      };
}


while(pass){
      clear();
      console.log('********************* Banco Gen *********************');
      sep();
      console.log(`                        Menu

      Clientes na fila atualmente: ${myQueue.count()}

      1 - Adicionar cliente na fila
      2 - Listar todos os clientes na fila
      3 - Atender uma pessoa na fila
      4 - Procurar pessoa na fila
      5 - Limpar a fila
      0 - Sair

      \n`);
      sep();
      const escolha:string = read.question('O que deseja fazer?: ');
      clear();

      switch(escolha){

            case '1':
                  let nomeCliente: string;
                  do{
                        console.log('            Adicionar cliente a fila\n');
                        nomeCliente = read.question('Digite o nome do cliente (ou "c" para cancelar): ').toLowerCase();

                        if(nomeCliente && nomeCliente !== 'c') {
                              myQueue.enqueue(nomeCliente);
                              console.log(`\nCliente ${nomeCliente} adicionado!\n`);
                              pause();
                              clear();
                        }
                        if(nomeCliente == ''){
                              console.log('\nNome inválido!');
                              pause();
                              clear();
                        };

                  }
                  while(nomeCliente !== 'c');
                  break;

            case '2':
                  console.log('            Mostrar clientes na fila\n');

                  if(isEmpty()){break;};

                  console.log('Lista de clientes na fila atualmente:\n');
                  myQueue.printQueue();
                  pause();
                  break;

            case '3':
                  console.log('            Atender Cliente\n');

                  if(isEmpty()){break;};

                  const atender:boolean = read.keyInYNStrict(`Proximo cliente na fila: ${myQueue.peek()}, deseja atende-lo?: `);

                  if(!atender){
                        break;
                  };

                  console.log(`O cliente ${myQueue.dequeue()} foi atendido!\n`);

                  if(isEmpty()){break;};

                  console.log('Clientes na fila: \n');
                  myQueue.printQueue();
                  pause();
                  break;

            case '4':
                  console.log('            Procurar cliente na fila\n');

                  if(isEmpty()){break;};

                  const findPessoa:string = read.question('Digite o nome da pessoa que deseja encontrar na fila ou "c" para cancelar: ').toLowerCase();

                  if(findPessoa == 'c'){
                        break;
                  };

                  if(!(myQueue.contains(findPessoa))){
                        console.log(`\n${findPessoa} não esta na fila!\n`);
                        pause();
                        break;
                  };
                  console.log(`\n${findPessoa} está na fila!\n`);
                  pause();
                  break;

            case '5':
                  console.log('            Limpar fila\n');

                  if(isEmpty()){break;};

                  const limpar:boolean = read.keyInYNStrict('Voce realmente deseja apagar a fila?');

                  if(!limpar){
                        console.log('\nOperação cancelada!\n');
                        pause();
                        break;
                  }

                  myQueue.clear();
                  console.log('\nA fila foi apagada com sucesso!\n');
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