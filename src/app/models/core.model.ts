export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
  
    constructor(id: number, firstName: string, lastName: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    
  }