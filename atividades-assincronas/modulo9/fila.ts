interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean {
      return this.QueueData.length <= 0;
   }

   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }

   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         return;
      }
      return this.QueueData.shift();
   }

   count(): number {
      return this.QueueData.length;
   }

   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   peek(): Type | undefined {
      if (this.isEmpty()) {
         return;
      }
      return this.QueueData[0];
   }

   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      }
      return false;
   }

   clear(): void {
      this.QueueData.length = 0;
   }

}