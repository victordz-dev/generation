import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{
      private _nRodas: number;
      private _velocidade: number;

      constructor(capacidade: number, nRodas: number, velocidade: number){
            super(capacidade);
            this._nRodas = nRodas;
            this._velocidade = velocidade;
      }

      
}