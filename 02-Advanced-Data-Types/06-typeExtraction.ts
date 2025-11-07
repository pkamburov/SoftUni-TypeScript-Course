let names = {
  fName: "John",
  lName: "Doe",
  age: 22,
  getPersonInfo() {
    return `${this.fName} ${this.lName}, age ${this.age}`;
  },
};

let userLocation = {
  city: "Boston",
  street: "Nowhere street",
  number: 13,
  postalCode: 51225,
  getAddressInfo() {
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
  },
};

// Solution
type NamesType = typeof names;
type UserLocationType = typeof userLocation;
type PersonType = NamesType & UserLocationType;

function createCombinedFunction(
  names: NamesType,
  userLocation: UserLocationType
) {
  return function (person: PersonType) {
    console.log(
      `Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`
    );
  };
}
//

let combinedFunction = createCombinedFunction(names, userLocation);
let combinedPerson = Object.assign({}, names, userLocation);
combinedFunction(combinedPerson);
