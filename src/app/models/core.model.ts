export class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}

export class UserDetail extends User {
  age: number;
  gender: string;
  address: SampleAddressInfo;
}

export class SampleAddressInfo {
  regino: string;
  country: string;
}
