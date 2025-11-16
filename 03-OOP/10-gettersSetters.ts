class User {
  private _username!: string;

  constructor(username: string) {
    this.username = username;
  }

  get username() {
    return this._username;
  }

  set username(newUsername: string) {
    if (newUsername.length >= 3) {
      this._username = newUsername;
    } else {
      throw new Error("Error: Username must be at least 3 characters long");
    }
  }
}

//// Tests
// const user = new User("Martin");
// user.username = "johnDoe";
// console.log(user.username);

// const user = new User("jo");

const user = new User("Martin");
user.username = "Do";
