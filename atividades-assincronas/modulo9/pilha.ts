interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
 }
 
 export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean {
      return this.StackData.length <= 0;
    }
 
    push(dataItem: Type): void {
      this.StackData.push(dataItem);
   }
 
    pop(): Type | undefined {
      if (this.isEmpty()) {
         return;
      }
      return this.StackData.pop();
    }
 
    count(): number {
       return this.StackData.length;
    }
 
    printStack(): void {
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {
          console.log(this.StackData[i]);
       }
    }
 
    peek(): Type | undefined {
       if (this.isEmpty()) {
          return;
       }
         return this.StackData[this.StackData.length - 1];
    }
 
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {
          return true;
       }
         return false;
    }
    
    clear(): void {
       this.StackData.length = 0;
    }
 
 }