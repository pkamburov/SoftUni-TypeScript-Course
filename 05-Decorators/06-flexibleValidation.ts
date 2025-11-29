class User {
  private _name!: string;
  private _age!: number;
  private _password!: string;

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  @validateName(1)
  set name(val: string) {
    this._name = val;
  }

  @validateAge(1, 150)
  set age(val: number) {
    this._age = val;
  }

  @validatePassword(/^[a-zA-Z0-9]+$/g)
  set password(val: string) {
    this._password = val;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

function validateName(minLength: number) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.set;
    descriptor.set = function (name: string) {
      if (name.length < minLength) {
        throw new Error(`name must have at least ${minLength} characters`);
      }
      original?.call(this, name);
    };
    return descriptor;
  };
}

function validateAge(min: number, max: number) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.set;
    descriptor.set = function (newAge: number) {
      if (newAge < min || newAge > max) {
        throw new Error(`age must be between ${min} and ${max}`);
      }
      original?.call(this, newAge);
    };
    return descriptor;
  };
}

function validatePassword(regex: RegExp) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.set;
    descriptor.set = function (newPassword: string) {
      if (!newPassword.match(regex)) {
        throw new Error(`password needs to match ${regex}`);
      }
      original?.call(this, newPassword);
    };
    return descriptor;
  };
}

let user = new User("John", 130, "hardPassword12");
let user2 = new User("John", 30, "!test");
let user3 = new User("John", 25, "@werty");
let user4 = new User("Jo", 20, "password123");
