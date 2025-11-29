function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Function '${propertyKey}' called with arguments: ${args.join(", ")}`
    );
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Person {
  public fName: string;
  public lName: string;

  constructor(firstName: string, lastName: string) {
    this.fName = firstName;
    this.lName = lastName;
  }

  @log
  static getFullName(name1: string, name2: string): string {
    return `${name1} ${name2}`;
  }
}

let person = new Person("John", "Does");

Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
