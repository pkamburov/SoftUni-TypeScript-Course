class MockAuthrizationService {
  constructor(
    private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
  ) {}

  canViewData(property: string) {
    switch (this.userRole) {
      case "Admin":
        return true;

      case "PersonalDataAdministrator":
        return ["name", "age"].includes(property);

      default:
        return false;
    }
  }
}

function Authorization(authService: MockAuthrizationService) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
      if (!authService.canViewData(propertyKey)) {
        throw new Error("You are not authorized to view this information");
      }

      return originalGetter?.call(this);
    };

    return descriptor;
  };
}

let mockAuthorizationService = new MockAuthrizationService("Admin");

class User {
  private _name: string;
  private _age: number;
  private _creditCardNumber: string;

  constructor(name: string, age: number, creditCardNum: string) {
    this._name = name;
    this._age = age;
    this._creditCardNumber = creditCardNum;
  }

  @Authorization(mockAuthorizationService)
  public get name(): string {
    return this._name;
  }

  @Authorization(mockAuthorizationService)
  public get age(): number {
    return this._age;
  }

  @Authorization(mockAuthorizationService)
  public get creditCardNumber(): string {
    return this._creditCardNumber;
  }
}

// Test 1
// let mockAuthorizationService = new MockAuthrizationService("Admin");

// const user1 = new User("John Doe", 30, "ABCD-1234");

// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

// Test 2 - Runtime Error for get creditCardNumber
// let mockAuthorizationService = new MockAuthrizationService(
//   "PersonalDataAdministrator"
// );

// const user1 = new User("John Doe", 30, "ABCD-1234");

// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

// Test 3
// let mockAuthorizationService = new MockAuthrizationService("Guest");

// const user1 = new User("John Doe", 30, "ABCD-1234");

// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);
