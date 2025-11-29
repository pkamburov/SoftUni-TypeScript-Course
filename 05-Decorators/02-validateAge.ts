class Age {
  private _age!: number;

  constructor(age: number) {
    this.age = age;
  }

  @validator set age(val: number) {
    this._age = val;
  }

  get age() {
    return this._age;
  }
}

function validator(target: any, key: string, descriptor: PropertyDescriptor) {
  let originalAge = descriptor.set;
  descriptor.set = function (val: number) {
    if (val >= 1 && val <= 200) {
      originalAge?.call(this, val);
    } else {
      throw new Error(`Error: Age must be between 1 and 200`);
    }
  };
}

let ageVal = new Age(10);
ageVal.age = -10;
console.log(ageVal.age);
